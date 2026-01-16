// Content script - This file is injected into web pages
// Note: The actual image extraction logic is in popup.js (executeScript)
// This file can be used for future enhancements

console.log('Image Downloader content script loaded');

// Listen for messages from popup if needed
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'ping') {
        sendResponse({ status: 'ready' });
    }
    return true;
});
