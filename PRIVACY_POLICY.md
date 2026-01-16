# Privacy Policy for Image Downloader Extension

**Last Updated**: January 16, 2026

## Introduction

This Privacy Policy describes how the "Image Downloader - Download All Images in 4K 8K HD Quality" Chrome extension ("we", "our", or "the Extension") handles user information.

## Our Commitment

**We do NOT collect, store, transmit, or process any personal data whatsoever.**

## Data Collection

The Extension does **NOT** collect any data, including but not limited to:

- Personal information (name, email, address, etc.)
- Browsing history
- Website visits
- Downloaded images or their URLs
- IP addresses
- Device information
- Usage statistics
- Analytics data
- Cookies or tracking data

## How the Extension Works

The Extension operates **entirely locally** on your device:

1. **Image Scanning**: When you click "Scan For Images", the extension analyzes the current webpage's DOM (Document Object Model) locally in your browser to find image URLs.

2. **Image Display**: Found images are displayed in the extension popup for your review.

3. **Downloads**: When you choose to download images, Chrome's built-in download API is used. Downloaded files go directly to your local downloads folder.

4. **No External Communication**: The extension does not communicate with any external servers, databases, or third-party services.

## Permissions Explanation

The Extension requests the following Chrome permissions:

### activeTab
- **Purpose**: To access the current webpage's content when you click the extension icon
- **Usage**: Only activates when you interact with the extension
- **Data Access**: Reads image URLs from the current tab's HTML/CSS
- **Data Storage**: None - all processing is temporary and discarded after use

### downloads
- **Purpose**: To save images to your local downloads folder
- **Usage**: Only triggered when you choose to download images
- **Data Access**: Uses Chrome's download manager to save files locally
- **Data Storage**: Files are saved to your device's download folder only

### scripting
- **Purpose**: To inject code that scans the webpage for images
- **Usage**: Executes image extraction script only when you click "Scan For Images"
- **Data Access**: Reads DOM elements to find image sources
- **Data Storage**: No data is stored; extracted URLs are held temporarily in memory

### host_permissions (\<all_urls\>)
- **Purpose**: To work on any website you visit
- **Usage**: Required because image downloading should work on all websites
- **Data Access**: Only accesses the page when you explicitly use the extension
- **Data Storage**: None

## Third-Party Services

The Extension does **NOT** use any third-party services, including:

- Analytics services (e.g., Google Analytics)
- Advertising networks
- Social media integrations
- External APIs
- Remote servers
- Cloud storage

## Data Storage

- **Zero Data Storage**: The extension does not use Chrome's storage APIs to save any data
- **No Cookies**: No cookies are set or accessed
- **No Local Storage**: No information is saved to localStorage or IndexedDB
- **Temporary Memory Only**: Image URLs are held in temporary memory only during active use and are immediately discarded

## User Control

You have complete control:

- **Opt-Out**: Simply don't use the extension or uninstall it at any time
- **Download Control**: You choose which images to download and when
- **Website Access**: The extension only runs when you click its icon
- **Complete Transparency**: All code is available for review

## Children's Privacy

The Extension does not knowingly collect any information from anyone, including children under 13 years of age.

## Changes to Privacy Policy

Any changes to this Privacy Policy will be posted on this page. Continued use of the Extension after changes constitutes acceptance of the updated policy.

## Open Source

The Extension's source code is available for public review, demonstrating our commitment to transparency and privacy.

## Contact

If you have questions or concerns about this Privacy Policy or the Extension's privacy practices, please contact us through:

- Chrome Web Store listing review/support section
- GitHub repository (if applicable)

## Your Rights

As we collect no data, there is no personal data to:
- Access
- Correct
- Delete
- Export
- Restrict processing of

The Extension operates with **zero data collection** by design, ensuring maximum privacy protection.

## Compliance

This Extension complies with:

- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Other applicable privacy laws

## Summary

**In simple terms**: This extension works completely on your device, collects nothing, stores nothing, and sends nothing. Your privacy is 100% protected because we simply don't access, collect, or transmit any of your data.

---

**Extension Name**: Image Downloader - Download All Images in 4K 8K HD Quality  
**Privacy Level**: Maximum (Zero Data Collection)  
**Last Updated**: January 16, 2026
