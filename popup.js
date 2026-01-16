// DOM elements
const scanBtn = document.getElementById('scanBtn');
const downloadAllBtn = document.getElementById('downloadAllBtn');
const status = document.getElementById('status');
const statusText = document.getElementById('statusText');
const results = document.getElementById('results');
const error = document.getElementById('error');
const errorText = document.getElementById('errorText');
const imageCount = document.getElementById('imageCount');
const imageGrid = document.getElementById('imageGrid');

let foundImages = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  scanBtn.addEventListener('click', scanImages);
  downloadAllBtn.addEventListener('click', downloadAll);
});

// Scan for images
async function scanImages() {
  try {
    // Hide previous results
    hideAll();
    status.classList.remove('hidden');
    scanBtn.disabled = true;

    // Get active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab.id) {
      throw new Error('Unable to access current tab');
    }

    // Inject content script and extract images
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: extractImages
    });

    foundImages = results[0].result || [];

    if (foundImages.length === 0) {
      throw new Error('No images found on this page');
    }

    // Display results
    displayImages(foundImages);

  } catch (err) {
    showError(err.message);
  } finally {
    status.classList.add('hidden');
    scanBtn.disabled = false;
  }
}

// Extract images function (runs in page context)
function extractImages() {
  const images = new Set();
  const urlPattern = /url\(['"]?([^'"]+)['"]?\)/g;

  // Helper: Get highest quality from srcset
  function getHighestQualitySrc(srcset) {
    if (!srcset) return null;

    const sources = srcset.split(',').map(src => {
      const parts = src.trim().split(/\s+/);
      const url = parts[0];
      const descriptor = parts[1] || '1x';
      
      let quality = 1;
      if (descriptor.endsWith('w')) {
        quality = parseInt(descriptor);
      } else if (descriptor.endsWith('x')) {
        quality = parseFloat(descriptor) * 1000;
      }
      
      return { url, quality };
    });

    sources.sort((a, b) => b.quality - a.quality);
    return sources[0]?.url;
  }

  // Helper: Normalize URL
  function normalizeUrl(url) {
    if (!url) return null;
    if (url.startsWith('data:')) return url;
    if (url.startsWith('//')) return 'https:' + url;
    if (url.startsWith('/')) return window.location.origin + url;
    if (!url.startsWith('http')) return window.location.origin + '/' + url;
    return url;
  }

  // Helper: Is valid image URL
  function isValidImageUrl(url) {
    if (!url) return false;
    if (url.startsWith('data:image')) return true;
    if (url.length < 5) return false;
    if (url.includes('icon') && url.includes('favicon')) return false;
    const imageExtensions = /\.(jpg|jpeg|png|gif|webp|bmp|svg|tiff|ico|avif)(\?|$)/i;
    return imageExtensions.test(url) || url.includes('image');
  }

  // 1. Extract from <img> tags
  document.querySelectorAll('img').forEach(img => {
    let bestSrc = null;

    // Try srcset first (highest quality)
    if (img.srcset) {
      bestSrc = getHighestQualitySrc(img.srcset);
    }

    // Try data attributes (lazy loading)
    if (!bestSrc) {
      const dataAttrs = ['data-src', 'data-original', 'data-lazy', 'data-srcset', 'data-full', 'data-original-src'];
      for (const attr of dataAttrs) {
        const value = img.getAttribute(attr);
        if (value) {
          if (attr === 'data-srcset') {
            bestSrc = getHighestQualitySrc(value);
          } else {
            bestSrc = value;
          }
          if (bestSrc) break;
        }
      }
    }

    // Fallback to src
    if (!bestSrc && img.src) {
      bestSrc = img.src;
    }

    // Normalize and add
    const normalized = normalizeUrl(bestSrc);
    if (normalized && isValidImageUrl(normalized)) {
      images.add(normalized);
    }
  });

  // 2. Extract from <picture> elements
  document.querySelectorAll('picture source').forEach(source => {
    if (source.srcset) {
      const bestSrc = getHighestQualitySrc(source.srcset);
      const normalized = normalizeUrl(bestSrc);
      if (normalized && isValidImageUrl(normalized)) {
        images.add(normalized);
      }
    }
  });

  // 3. Extract from CSS background images
  document.querySelectorAll('*').forEach(el => {
    const style = window.getComputedStyle(el);
    const bgImage = style.backgroundImage;

    if (bgImage && bgImage !== 'none') {
      const matches = bgImage.matchAll(urlPattern);
      for (const match of matches) {
        const normalized = normalizeUrl(match[1]);
        if (normalized && isValidImageUrl(normalized)) {
          images.add(normalized);
        }
      }
    }
  });

  // 4. Extract from <a> tags pointing to images
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.href;
    if (isValidImageUrl(href)) {
      images.add(href);
    }
  });

  // Convert Set to Array and return
  return Array.from(images);
}

// Display images in grid
function displayImages(images) {
  hideAll();
  results.classList.remove('hidden');
  
  imageCount.textContent = images.length;
  imageGrid.innerHTML = '';

  images.forEach((url, index) => {
    const card = document.createElement('div');
    card.className = 'image-card';
    card.title = `Click to download\n${url}`;

    const img = document.createElement('img');
    img.src = url;
    img.alt = `Image ${index + 1}`;
    img.loading = 'lazy';
    
    // Handle broken images
    img.onerror = () => {
      card.style.opacity = '0.5';
      img.alt = 'Failed to load';
    };

    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `
      <svg class="download-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    card.appendChild(img);
    card.appendChild(overlay);
    card.addEventListener('click', () => downloadImage(url, index));

    imageGrid.appendChild(card);
  });
}

// Download single image
async function downloadImage(url, index) {
  try {
    const filename = getFilename(url, index);
    await chrome.runtime.sendMessage({
      action: 'download',
      url: url,
      filename: filename
    });
  } catch (err) {
    console.error('Download failed:', err);
  }
}

// Download all images
async function downloadAll() {
  if (foundImages.length === 0) return;

  downloadAllBtn.disabled = true;
  downloadAllBtn.textContent = 'Downloading...';

  try {
    for (let i = 0; i < foundImages.length; i++) {
      const url = foundImages[i];
      const filename = getFilename(url, i);
      
      await chrome.runtime.sendMessage({
        action: 'download',
        url: url,
        filename: filename
      });

      // Small delay to avoid overwhelming the download manager
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    downloadAllBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Downloaded!
    `;

    setTimeout(() => {
      downloadAllBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Download All
      `;
      downloadAllBtn.disabled = false;
    }, 2000);

  } catch (err) {
    console.error('Bulk download failed:', err);
    downloadAllBtn.disabled = false;
  }
}

// Get filename from URL
function getFilename(url, index) {
  try {
    // Handle data URLs
    if (url.startsWith('data:')) {
      const match = url.match(/data:image\/([a-zA-Z]+);/);
      const ext = match ? match[1] : 'png';
      return `image-${index + 1}.${ext}`;
    }

    // Extract filename from URL
    const urlObj = new URL(url);
    let filename = urlObj.pathname.split('/').pop();

    // Remove query parameters from filename
    filename = filename.split('?')[0];

    // Ensure extension
    if (!filename.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg|tiff|avif)$/i)) {
      filename += '.jpg';
    }

    // Add index to prevent duplicates
    const parts = filename.split('.');
    const ext = parts.pop();
    const name = parts.join('.');
    
    return `${name || 'image'}-${index + 1}.${ext}`;

  } catch (err) {
    return `image-${index + 1}.jpg`;
  }
}

// Show error
function showError(message) {
  hideAll();
  error.classList.remove('hidden');
  errorText.textContent = message;
}

// Hide all sections
function hideAll() {
  status.classList.add('hidden');
  results.classList.add('hidden');
  error.classList.add('hidden');
}
