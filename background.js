// Background service worker for handling downloads

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'download') {
        downloadImage(request.url, request.filename);
        sendResponse({ success: true });
    }
    return true;
});

// Download image function
async function downloadImage(url, filename) {
    try {
        // For data URLs, we need to convert them to blob URLs first
        if (url.startsWith('data:')) {
            url = await dataUrlToBlobUrl(url);
        }

        // Start download
        await chrome.downloads.download({
            url: url,
            filename: `downloaded-images/${filename}`,
            conflictAction: 'uniquify',
            saveAs: false
        });

    } catch (error) {
        console.error('Download error:', error);

        // Fallback: try downloading without folder
        try {
            await chrome.downloads.download({
                url: url,
                filename: filename,
                conflictAction: 'uniquify',
                saveAs: false
            });
        } catch (fallbackError) {
            console.error('Fallback download error:', fallbackError);
        }
    }
}

// Convert data URL to blob URL
async function dataUrlToBlobUrl(dataUrl) {
    try {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error('Error converting data URL:', error);
        return dataUrl;
    }
}

// Extension installation/update handler
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('Image Downloader installed successfully!');
    } else if (details.reason === 'update') {
        console.log('Image Downloader updated to version', chrome.runtime.getManifest().version);
    }
});
