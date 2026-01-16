# 🎨 FREE Image Downloader - Download All Images in 4K 8K Quality

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web%20Store-blue?style=for-the-badge&logo=google-chrome)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-Anujch8889-black?style=for-the-badge&logo=github)](https://github.com/Anujch8889)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge)](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality)

<div align="center">
  <h2>🚀 The Ultimate Chrome Extension for Downloading High-Quality Images</h2>
  <p><strong>100% FREE • No Ads • Privacy-First • Open Source</strong></p>
</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Why Choose This Extension?](#-why-choose-this-extension)
- [Installation Guide](#-installation-guide)
- [How to Use](#-how-to-use)
- [Advanced Features](#-advanced-features)
- [Technical Details](#-technical-details)
- [Use Cases](#-use-cases)
- [Privacy & Security](#-privacy--security)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)

---

## 🌟 Overview

**FREE Image Downloader** is a powerful, privacy-focused Chrome extension that intelligently downloads **ALL images** from any webpage in their **highest available quality** - including **4K, 8K, and ultra HD** resolutions.

Unlike other image downloaders that only grab the currently displayed image, our extension uses **advanced srcset parsing** and **intelligent image detection** to find the **maximum resolution** versions of images, even if they're not currently visible on the page.

### What Makes This Special?

- 🎯 **Srcset Intelligence**: Automatically detects and downloads the highest resolution from responsive image sets
- 🖼️ **Lazy Load Detection**: Finds images loaded with data-src, data-original, and other lazy loading techniques
- 🎨 **CSS Background Images**: Extracts images from CSS background-image properties
- 📱 **Retina Display Support**: Prioritizes 2x, 3x, and higher DPI images
- 🚀 **One-Click Bulk Download**: Download all images with a single click
- 🎭 **Clean, Modern UI**: Beautiful gradient interface with smooth animations
- 🔒 **100% Private**: Zero data collection, completely local processing
- 💰 **Completely FREE**: No subscriptions, no premium features, no ads

---

## ✨ Key Features

### 🔍 Intelligent Image Detection

Our extension goes beyond simple image scraping. It intelligently analyzes the webpage to find images from multiple sources:

#### 1. **Standard `<img>` Tags** 
Scans all `<img>` elements on the page and extracts their `src` attributes.

#### 2. **Responsive Images (srcset)** ⭐ **MOST IMPORTANT**
```html
<img srcset="image-480w.jpg 480w, 
             image-1200w.jpg 1200w, 
             image-2400w.jpg 2400w" 
     src="image-default.jpg">
```
**Our extension automatically selects `image-2400w.jpg`** (the highest quality) instead of the default or currently displayed version.

#### 3. **Picture Elements**
```html
<picture>
  <source srcset="image-desktop-4k.jpg" media="(min-width: 1920px)">
  <source srcset="image-desktop.jpg" media="(min-width: 1024px)">
  <img src="image-mobile.jpg">
</picture>
```
**Downloads the highest quality source** (`image-desktop-4k.jpg`), not the fallback.

#### 4. **Lazy-Loaded Images**
Detects images using popular lazy loading techniques:
- `data-src="high-res-image.jpg"`
- `data-original="original-image.jpg"`
- `data-lazy="lazy-loaded.jpg"`
- `data-srcset="image-set"`
- `data-full="full-res.jpg"`

#### 5. **CSS Background Images**
```css
.hero-section {
  background-image: url('hero-4k.jpg');
}
```
Extracts image URLs from `background-image` CSS properties.

#### 6. **High-DPI/Retina Images**
```html
<img srcset="logo.png 1x, logo@2x.png 2x, logo@3x.png 3x">
```
**Automatically downloads `logo@3x.png`** (highest pixel density).

#### 7. **Direct Image Links**
```html
<a href="full-resolution-photo.jpg">View Full Image</a>
```
Finds links that point directly to image files.

### 📦 Download Options

#### **Bulk Download**
- Downloads all found images with one click
- Automatically creates unique filenames to prevent conflicts
- Organizes downloads in a `downloaded-images` folder
- Progress indication with download count

#### **Individual Download**
- Click any image preview to download just that one
- Hover to see full image URL
- Preview before downloading

### 🎨 User Interface

#### **Modern, Clean Design**
- **Purple-Blue Gradient Header**: Premium look and feel
- **FREE Badge**: Animated green badge showing it's completely free
- **Responsive Grid**: 3-column image preview grid
- **Smooth Animations**: Professional transitions and hover effects
- **Loading States**: Clear spinner during page scanning
- **Error Handling**: Friendly error messages when no images found

#### **Social Integration**
- **GitHub Link**: Connect with the developer
- **Instagram Link**: Follow for updates
- **Hover Effects**: Beautiful purple glow on interaction

### 🔧 Technical Capabilities

#### **Format Support**
Supports all major image formats:
- **JPG/JPEG** - Most common format
- **PNG** - Lossless compression, transparency support
- **GIF** - Animated images
- **WebP** - Modern, efficient format
- **SVG** - Vector graphics
- **BMP** - Bitmap images
- **TIFF** - High-quality format
- **AVIF** - Next-gen format
- **ICO** - Icon files

#### **Resolution Support**
No upper limit on image resolution:
- ✅ HD (1280 x 720)
- ✅ Full HD (1920 x 1080)
- ✅ 2K (2560 x 1440)
- ✅ 4K (3840 x 2160)
- ✅ 5K (5120 x 2880)
- ✅ 8K (7680 x 4320)
- ✅ Beyond 8K (limited only by source)

---

## 🏆 Why Choose This Extension?

### Comparison with Other Image Downloaders

| Feature | This Extension | Typical Downloaders |
|---------|---------------|---------------------|
| **Srcset Parsing** | ✅ Yes (Automatic) | ❌ No |
| **Highest Quality** | ✅ Always | ⚠️ Sometimes |
| **Lazy Load Detection** | ✅ Yes | ❌ No |
| **CSS Backgrounds** | ✅ Yes | ❌ No |
| **Retina Images** | ✅ Priority | ❌ No |
| **Data Collection** | ✅ Zero | ⚠️ Often Yes |
| **Price** | ✅ 100% Free | ⚠️ Premium Features |
| **Ads** | ✅ None | ⚠️ Usually Yes |
| **UI Quality** | ✅ Modern | ⚠️ Basic |

### Unique Advantages

1. **Srcset Intelligence**: Most downloaders grab whatever image is currently displayed. We find the source code and select the **absolute highest quality** available.

2. **No False Positives**: Smart filtering excludes tiny icons, favicons, and tracking pixels automatically.

3. **Speed**: Scans typical webpages in 1-2 seconds, even with 50+ images.

4. **Privacy-First**: Absolutely zero data collection. No analytics, no tracking, no external servers.

5. **Professional Development**: Clean, readable code. Well-documented. Open source.

---

## 📥 Installation Guide

### Method 1: From Chrome Web Store (Coming Soon)

1. Visit the [Chrome Web Store listing](#) (link will be added after publication)
2. Click **"Add to Chrome"**
3. Click **"Add Extension"** in the popup
4. Done! The extension icon will appear in your toolbar

### Method 2: Manual Installation (Developer Mode)

Perfect for testing or if you want to modify the code:

#### Step 1: Download the Source Code

**Option A: Clone with Git**
```bash
git clone https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality.git
```

**Option B: Download ZIP**
1. Go to [GitHub Repository](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality)
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Extract the ZIP file to a folder

#### Step 2: Open Chrome Extensions Page

1. Open **Google Chrome** browser
2. Type `chrome://extensions/` in the address bar
3. Press **Enter**

**Alternative:** Click ⋮ (three dots) → More Tools → Extensions

#### Step 3: Enable Developer Mode

1. Look at the **top-right corner** of the extensions page
2. Toggle the **"Developer mode"** switch to **ON** (it will turn blue)

#### Step 4: Load the Extension

1. Click the **"Load unpacked"** button (appears after enabling Developer mode)
2. Navigate to the folder where you extracted/cloned the extension
3. Select the folder and click **"Select Folder"**
4. The extension will appear in your extensions list!

#### Step 5: Pin to Toolbar (Recommended)

1. Click the **puzzle piece icon** 🧩 in the Chrome toolbar
2. Find **"FREE Image Downloader"** in the list
3. Click the **pin icon** 📌 next to it
4. The extension icon will now be visible in your toolbar

### Verification

After installation, you should see:
- ✅ Extension card with name "FREE Image Downloader"
- ✅ Version 1.0.0
- ✅ Purple/blue gradient icon
- ✅ "Enabled" toggle is ON
- ✅ No errors shown

---

## 🎯 How to Use

### Basic Usage (3 Simple Steps)

#### Step 1: Navigate to a Webpage with Images

Go to any website that has images you want to download:
- **Photography sites**: Unsplash, Pexels, Pixabay
- **Social media**: Pinterest, Instagram (public posts)
- **E-commerce**: Amazon, eBay (product images)
- **News sites**: BBC, CNN (article photos)
- **Portfolios**: Behance, Dribbble
- **Any website with images**

#### Step 2: Click the Extension Icon

1. Look for the extension icon in your Chrome toolbar (purple/blue gradient)
2. Click the icon
3. A clean popup will appear showing:
   - **Header**: "Image Downloader" with green "FREE" badge
   - **Button**: "Scan For Images" with search icon
   - **Footer**: "Supports 4K, 8K, and ultra HD images"

#### Step 3: Scan and Download

1. Click the **"Scan For Images"** button
2. Wait 1-2 seconds while scanning (spinner animation shows progress)
3. **Results appear**:
   - Image count (e.g., "24 images found")
   - 3-column grid preview of all images
   - Green "Download All" button
4. **Choose your download method**:
   - **Download All**: Click the green button to download everything
   - **Individual Download**: Click any specific image in the grid

### Advanced Usage

#### Filtering Results (Manual)

While the extension automatically filters out tiny icons and tracking pixels, you can:
1. Preview images in the grid
2. Hover to see the full URL
3. Download only specific images by clicking them individually

#### Download Location

**Default:** Images download to:
```
C:\Users\<YourUsername>\Downloads\downloaded-images\
```

**Change Location:**
1. Chrome Settings (⋮ → Settings)
2. Scroll to "Downloads"
3. Change "Location"
4. Future downloads will use the new location

#### Filename Format

Downloaded files are automatically named with the format:
```
<original-name>-<number>.<extension>
```

**Examples:**
- `hero-image-1.jpg`
- `product-photo-2.png`
- `image-3.webp`

The number prevents duplicate filenames and ensures no files are overwritten.

---

## 🔬 Advanced Features

### How Srcset Parsing Works

When you visit a modern website, images often have multiple versions:

```html
<img srcset="small.jpg 480w, 
             medium.jpg 1024w, 
             large.jpg 1920w,
             xlarge.jpg 2560w,
             ultra.jpg 3840w"
     src="default.jpg">
```

**What other downloaders do:**
- Download `default.jpg` (might be low quality)
- OR download whatever the browser is currently displaying (depends on your screen size)

**What our extension does:**
1. Parses the `srcset` attribute
2. Extracts all available URLs with their width descriptors
3. Identifies `ultra.jpg 3840w` as the highest quality
4. **Downloads `ultra.jpg`** automatically

The result? You get **4K quality** instead of a small preview!

### Lazy Loading Detection Explained

Many websites delay loading images until they're about to be scrolled into view (lazy loading). They use placeholders:

```html
<img src="placeholder.jpg" 
     data-src="actual-full-quality-image.jpg">
```

**Standard downloaders** might only find `placeholder.jpg`.

**Our extension** checks for:
- `data-src`
- `data-original`
- `data-lazy`
- `data-srcset`
- `data-full`
- `data-original-src`

And downloads the **actual full-quality image**, not the placeholder.

### CSS Background Image Extraction

Some websites use CSS backgrounds for hero images:

```css
.banner {
  background-image: url('hero-4k.jpg'), 
                    url('fallback.jpg');
}
```

**Our extension:**
1. Gets computed styles for all elements
2. Parses `background-image` properties
3. Extracts URLs using regex
4. Normalizes relative URLs to absolute
5. Adds to download list

### URL Normalization

The extension handles various URL formats:

| Input URL | Normalized Output |
|-----------|-------------------|
| `//cdn.example.com/img.jpg` | `https://cdn.example.com/img.jpg` |
| `/images/photo.png` | `https://currentsite.com/images/photo.png` |
| `../assets/pic.jpg` | `https://currentsite.com/assets/pic.jpg` |
| `data:image/png;base64,...` | *(converted to blob URL)* |

---

## 🛠️ Technical Details

### Architecture

The extension uses **Chrome Manifest V3** (the latest standard) with three main components:

#### 1. **Popup (popup.html, popup.css, popup.js)**

User interface that displays when you click the extension icon.

**Key Technologies:**
- HTML5 semantic markup
- CSS3 gradients, transitions, grid layout
- Vanilla JavaScript (no frameworks = faster)
- Event-driven architecture

**Responsibilities:**
- Display UI
- Communicate with content script
- Trigger downloads
- Show results and errors

#### 2. **Content Script (content.js, injected from popup.js)**

JavaScript code injected into the webpage to analyze and extract images.

**Execution Context:**
- Runs in the webpage's DOM
- Has access to page elements
- Cannot access Chrome APIs directly
- Communicates with popup via messaging

**Responsibilities:**
- Parse HTML for image elements
- Extract srcset attributes
- Find lazy-loaded images
- Get computed CSS styles
- Return array of image URLs

#### 3. **Background Service Worker (background.js)**

Event-driven script that handles download operations.

**Responsibilities:**
- Listen for download requests from popup
- Use Chrome Downloads API
- Convert data URLs to blob URLs
- Handle download errors
- Manage filename conflicts

### Permissions Explained

The extension requests 4 permissions:

#### `activeTab` ✅ **Safe**
- **What it does**: Access current tab when you click the icon
- **Why needed**: To read webpage HTML and find images
- **Privacy impact**: None - only when you activate it
- **Scope**: Active tab only, not all tabs

#### `downloads` ✅ **Safe**
- **What it does**: Save files to Downloads folder
- **Why needed**: To download images to your computer
- **Privacy impact**: None - files saved locally
- **Scope**: Uses Chrome's built-in download manager

#### `scripting` ✅ **Safe**
- **What it does**: Inject code into webpages
- **Why needed**: To analyze page and extract image URLs
- **Privacy impact**: None - only on pages you choose
- **Scope**: Only when you click "Scan For Images"

#### `host_permissions: <all_urls>` ✅ **Safe but requires explanation**
- **What it does**: Technically allows access to all websites
- **Why needed**: So extension works on ANY website (not limited to specific domains)
- **Privacy impact**: None - we don't use this to track or collect data
- **Actual usage**: Only activates when YOU click the extension icon

**Important:** Despite having `<all_urls>` permission, the extension:
- ❌ Does NOT run automatically on page load
- ❌ Does NOT track your browsing
- ❌ Does NOT send data anywhere
- ✅ Only works when you explicitly activate it

### Code Structure

```
extension/
├── manifest.json          # Extension configuration
├── popup.html             # UI structure
├── popup.css              # UI styling  
├── popup.js               # Main logic (15 functions, ~350 LOC)
├── background.js          # Download handler
├── content.js             # Content script placeholder
├── icons/                 # Extension icons
│   ├── icon16.png         # Toolbar icon (16x16)
│   ├── icon48.png         # Extension page (48x48)
│   └── icon128.png        # Chrome Web Store (128x128)
├── README.md              # This file
├── PRIVACY_POLICY.md      # Privacy documentation
├── STORE_LISTING.md       # Chrome Web Store content
├── PERMISSIONS_EXPLAINED.md # Permission justifications
├── QUICK_START.md         # Quick installation guide
└── .gitignore             # Git ignore rules
```

### Key Functions

#### `extractImages()` - **Core Intelligence**
```javascript
function extractImages() {
  // 1. Find all <img> elements
  // 2. Parse srcset for highest quality
  // 3. Check data attributes for lazy loading
  // 4. Find <picture> sources
  // 5. Extract CSS backgrounds
  // 6. Find direct image links
  // 7. Normalize URLs
  // 8. Filter duplicates
  // 9. Exclude tiny icons/favicons
  return Array.from(images);
}
```

#### `getHighestQualitySrc(srcset)` - **Srcset Parser**
```javascript
function getHighestQualitySrc(srcset) {
  const sources = srcset.split(',').map(src => {
    const [url, descriptor] = src.trim().split(/\s+/);
    const quality = descriptor.endsWith('w') 
      ? parseInt(descriptor)  // Width descriptor
      : parseFloat(descriptor) * 1000; // Pixel density
    return { url, quality };
  });
  sources.sort((a, b) => b.quality - a.quality);
  return sources[0].url; // Highest quality!
}
```

### Performance Optimization

- **Lazy Execution**: Extension only runs when activated
- **Set for Deduplication**: Uses JavaScript Set to avoid duplicate image URLs
- **Async/Await**: Non-blocking operations for smooth UI
- **Debouncing**: Prevents multiple simultaneous scans
- **Efficient DOM Queries**: Targeted `querySelectorAll` instead of full tree traversal

---

## 🎬 Use Cases

### 1. **Photographers**
Download high-resolution portfolio images from photography websites for inspiration or study.

**Example:** Visiting Unsplash.com
- 20-30 ultra high-res photos (4K-8K)
- Download all with one click
- Perfect for mood boards

### 2. **Graphic Designers**
Collect design inspiration, UI elements, and visual references.

**Example:** Browsing Dribbble or Behance
- Download design shots
- Collect UI patterns
- Build reference libraries

### 3. **Content Creators**
Gather assets for videos, presentations, or blog posts (ensure proper licensing).

**Example:** Research for YouTube video
- Download infographics
- Save diagrams
- Collect visual examples

### 4. **E-commerce**
Download product images for comparison or cataloging.

**Example:** Product research
- Multiple product angles
- Zoom images
- Detail shots

### 5. **Researchers & Students**
Collect images for academic presentations, reports, or research.

**Example:** Creating presentation
- Download relevant images
- Save charts and graphs
- Collect illustrations

### 6. **Web Developers**
Analyze competitor websites and download assets for comparison.

**Example:** Competitor analysis
- Download hero images
- Save UI elements
- Study design patterns

### 7. **Social Media Managers**
Download high-quality images from public posts (respecting copyright).

**Example:** Content curation
- Save trending visuals
- Download campaign assets
- Collect user-generated content

---

## 🔒 Privacy & Security

### Our Privacy Commitment

**We collect ZERO data. Period.**

### What We DON'T Do

❌ **No Data Collection**: We don't collect any user data  
❌ **No Tracking**: No analytics, no tracking pixels  
❌ **No External Servers**: Everything processes locally  
❌ **No Browsing History**: We can't see what sites you visit  
❌ **No Personal Info**: We don't access or store personal information  
❌ **No Cookies**: We don't set or access cookies  
❌ **No Third-Party Services**: No Google Analytics, no ad networks, nothing  
❌ **No Background Activity**: Only runs when you click the icon  

### What We DO

✅ **Local Processing Only**: All image extraction happens in your browser  
✅ **Transparent Code**: Open source - you can review every line  
✅ **Minimal Permissions**: Only what's necessary for functionality  
✅ **User Control**: You decide when to activate and what to download  
✅ **Secure Downloads**: Uses Chrome's built-in download manager  
✅ **No Network Requests**: Extension doesn't contact any servers  

### Technical Privacy Details

#### How It Works Without Data Collection:

1. **You click the extension icon** → Popup opens
2. **You click "Scan For Images"** → Code injects into current tab
3. **Code analyzes page** → Finds images, processes locally
4. **Results displayed** → All in your browser, nothing sent
5. **You download** → Directly to your local computer

**At no point does any data leave your computer.**

#### Verification

You can verify our privacy claims:

1. **Check Network Activity**:
   - Open Chrome DevTools (F12)
   - Go to "Network" tab
   - Use the extension
   - You'll see ZERO outgoing requests from the extension

2. **Review Source Code**:
   - All code is on [GitHub](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality)
   - Search for "fetch", "XMLHttpRequest", "axios" - you won't find any
   - No external API calls

3. **Check Chrome Extension Storage**:
   - Go to `chrome://extensions/`
   - Click "background page" (if shown)
   - Check storage - it's empty

### GDPR & CCPA Compliance

Because we collect no data:
- ✅ **GDPR Compliant**: No personal data processing
- ✅ **CCPA Compliant**: No California resident data collection  
- ✅ **No Cookie Consent Needed**: We don't use cookies
- ✅ **No Privacy Policy Required**: (But we provide one anyway for transparency)

### Security Best Practices

We follow security best practices:

✅ **Manifest V3**: Latest, most secure extension standard  
✅ **Content Security Policy**: Prevents XSS attacks  
✅ **No eval()**: No dynamic code execution  
✅ **Input Validation**: All URLs validated and normalized  
✅ **Safe Image Handling**: Images displayed in isolated context  

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Issue 1: Extension Icon Not Visible

**Problem:** After installation, can't find the extension icon.

**Solution:**
1. Click the puzzle piece icon 🧩 in Chrome toolbar
2. Find "FREE Image Downloader"
3. Click the pin icon 📌 to pin it to toolbar
4. Icon should now be visible

---

#### Issue 2: "No Images Found" Message

**Problem:** Extension says no images found, but page has images.

**Possible Causes & Solutions:**

**A) Page Not Fully Loaded**
- Wait for page to completely load
- Scroll down (for lazy-loaded images)
- Try scanning again

**B) Images in iframes**
- Extension can't access iframe content
- Try clicking inside the iframe and scanning

**C) Special Image Types**
- Some sites use canvas or WebGL for images
- These can't be extracted with DOM parsing
- Try right-click → "Save image as"

**D) Anti-Scraping Protection**
- Some sites actively prevent image extraction
- This is rare but possible

---

#### Issue 3: Downloads Not Starting

**Problem:** Click download but nothing happens.

**Solution:**

**Check Download Permission:**
1. Go to `chrome://settings/content/pdfDocuments`
2. Ensure downloads aren't blocked

**Check Extension Permissions:**
1. Go to `chrome://extensions/`
2. Find the extension
3. Click "Details"
4. Ensure all permissions are granted

**Clear Browser Cache:**
1. Ctrl + Shift + Delete
2. Clear browsing data
3. Restart Chrome
4. Try again

---

#### Issue 4: Low-Quality Images Downloaded

**Problem:** Downloaded images are lower quality than expected.

**Explanation:** 
The website may not have higher quality versions available. Our extension downloads the highest quality the website offers.

**Check:**
1. Right-click image on page → "Open image in new tab"
2. Check the image dimensions and file size
3. If the original is low quality, that's all that's available

---

#### Issue 5: Some Images Missing

**Problem:** Extension finds fewer images than expected.

**Possible Reasons:**

**A) Duplicate Filtering**
- Extension automatically removes duplicates
- Same image with different URLs counts as different

**B) Size Filtering**
- Very small images (< 5x5 pixels) are filtered
- Likely tracking pixels or spacers

**C) Invalid URLs**
- Broken or malformed image URLs aren't included

**D) Background Images**
- Some CSS backgrounds use gradients, not actual images

---

#### Issue 6: Extension Popup Doesn't Open

**Problem:** Clicking icon does nothing.

**Solution:**

**Method 1: Reload Extension**
1. Go to `chrome://extensions/`
2. Find "FREE Image Downloader"
3. Click the reload icon 🔄
4. Try clicking icon again

**Method 2: Reinstall**
1. Remove extension
2. Restart Chrome
3. Reinstall from GitHub or Chrome Web Store

**Method 3: Check Console**
1. Right-click extension icon
2. Select "Inspect popup"
3. Check Console for errors
4. Report issue on GitHub if errors found

---

#### Issue 7: "Permission Required" Error

**Problem:** Extension says it needs permission.

**Solution:**
1. Go to `chrome://extensions/`
2. Find extension
3. Click "Details"
4. Scroll to "Site access"
5. Select "On all sites" or "On click"
6. Refresh the webpage
7. Try again

---

### Still Having Issues?

1. **Check GitHub Issues**: [github.com/Anujch8889/...](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality/issues)
2. **Open New Issue**: Describe your problem with:
   - Chrome version
   - Extension version
   - Website URL (if specific to a site)
   - Steps to reproduce
   - Screenshots or error messages
3. **Contact Developer**: Links in footer of extension popup

---

## 🤝 Contributing

We love contributions! Here's how you can help:

### Ways to Contribute

1. **Report Bugs**: Found a problem? [Open an issue](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality/issues)
2. **Suggest Features**: Have an idea? Share it in discussions
3. **Improve Documentation**: Fix typos, add examples, clarify instructions
4. **Code Contributions**: Submit pull requests with improvements
5. **Translations**: Help translate the extension to other languages (coming soon)
6. **Share**: Tell others about the extension

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality.git
   ```
3. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make changes** and test thoroughly
5. **Commit** with clear messages:
   ```bash
   git commit -m "Add feature: description of feature"
   ```
6. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create Pull Request** on GitHub

### Code Style Guidelines

- Use **camelCase** for variables and functions
- Add **comments** for complex logic
- Keep functions **small and focused**
- Follow **existing code style**
- Test on **multiple websites** before submitting

### Testing Checklist

Before submitting a PR, test on:
- [ ] Basic image gallery website
- [ ] Site with lazy loading (e.g., Pinterest)
- [ ] Site with srcset (e.g., Unsplash)
- [ ] News website (e.g., BBC)
- [ ] E-commerce site (e.g., Amazon)
- [ ] Social media (e.g., Instagram public profile)

---

## 💬 Support

### Get Help

**GitHub Issues**: Best for bugs and feature requests  
[github.com/Anujch8889/.../issues](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality/issues)

**GitHub Discussions**: For questions and general discussion  
[github.com/Anujch8889/.../discussions](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality/discussions)

**Email**: For private inquiries (coming soon)

**Social Media**:
- GitHub: [@Anujch8889](https://github.com/Anujch8889)
- Instagram: [@yourusername](#) (update with your handle)

### FAQ

**Q: Is this really free?**  
A: Yes! 100% free, forever. No premium features, no subscriptions, no ads.

**Q: Do you collect my data?**  
A: No. Zero data collection. Everything is processed locally.

**Q: Can I use this for commercial purposes?**  
A: Yes, but respect image copyrights. Just because you can download doesn't mean you own the rights.

**Q: Works on which websites?**  
A: All websites. The extension is universal.

**Q: Can I download videos?**  
A: No, currently only images. Video support may come in future updates.

**Q: Is this safe?**  
A: Yes. Open source code you can review. No malicious code.

**Q: Will it slow down my browser?**  
A: No. Only runs when you activate it. Zero background activity.

---

## 📜 License

This project is licensed under the **MIT License**.

### What This Means:

✅ **Free to Use**: Personal and commercial  
✅ **Free to Modify**: Change the code as you wish  
✅ **Free to Distribute**: Share the extension  
✅ **No Warranty**: Provided "as is"  

See [LICENSE](LICENSE) file for full details.

---

## 🙏 Acknowledgments

### Technologies Used

- **Manifest V3** - Chrome Extension Platform
- **Vanilla JavaScript** - No frameworks for maximum performance
- **CSS3** - Modern styling with gradients and animations
- **Chrome APIs** - Downloads, Scripting, ActiveTab

### Inspiration

This extension was created to solve a real problem: downloading the highest quality images from modern responsive websites. Many downloaders fail to grab srcset versions, resulting in lower quality than what's actually available.

### Special Thanks

- Chrome Extension documentation
- Open source community
- All users who test and provide feedback
- Contributors who help improve the code

---

## 📊 Project Stats

- **Version**: 1.0.0
- **License**: MIT
- **Language**: JavaScript (ES6+)
- **Platform**: Chrome, Edge, Brave (Chromium-based browsers)
- **Manifest**: V3
- **Code Lines**: ~550 LOC
- **Files**: 13 total
- **Dependencies**: Zero (no npm packages)
- **Bundle Size**: < 1 MB

---

## 🗺️ Roadmap

Future features we're considering:

### Version 1.1 (Next)
- [ ] Filter images by minimum size/dimensions
- [ ] Preview full-size image before downloading
- [ ] Custom download location picker
- [ ] Keyboard shortcuts

### Version 1.2
- [ ] Download progress indicator
- [ ] Pause/resume bulk downloads
- [ ] Save download history
- [ ] Export image list as JSON/CSV

### Version 2.0
- [ ] Video download support
- [ ] PDF image extraction
- [ ] Batch rename tool
- [ ] Integration with cloud storage

📝 **Have suggestions?** [Open an issue](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality/issues) with the "enhancement" label!

---

## 📞 Contact

**Developer**: Anujch8889  
**GitHub**: [@Anujch8889](https://github.com/Anujch8889)  
**Repository**: [FREE Image Downloader](https://github.com/Anujch8889/FREE-Image-Downloader---Download-All-Images-in-4K-8K-Quality)  
**Chrome Web Store**: (Coming Soon)

---

<div align="center">
  
### ⭐ If you find this extension useful, please star the repository!

### 🚀 Download now and never lose access to high-quality images again!

**Made with ❤️ for photographers, designers, and everyone who loves beautiful images**

---

**100% FREE • Open Source • Privacy-First • No Ads**

</div>
