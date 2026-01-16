# Chrome Web Store - Single Purpose Statement

## When Chrome Web Store asks: "What is the single purpose of your extension?"

Copy this response:

---

## SINGLE PURPOSE STATEMENT:

**This extension has ONE single, focused purpose: To download images from webpages in their highest available quality.**

---

## DETAILED EXPLANATION:

### Primary Function (Single Purpose):
The extension's sole purpose is to **extract and download images** from any webpage the user is viewing. It does this by:

1. Scanning the current webpage for image elements when the user clicks "Scan For Images"
2. Identifying the highest quality version of each image available (from srcset attributes, retina versions, lazy-loaded sources)
3. Allowing the user to download those images either individually or in bulk

### What This Extension Does:
✅ Finds images on webpages  
✅ Identifies highest quality versions  
✅ Downloads images to user's computer  

### What This Extension Does NOT Do:
❌ Does not modify webpage content  
❌ Does not inject ads or tracking  
❌ Does not collect user data  
❌ Does not provide any other functionality beyond image downloading  
❌ Does not edit, convert, or manipulate images  
❌ Does not upload images anywhere  
❌ Does not interact with any external services  

---

## WHY THIS QUALIFIES AS "SINGLE PURPOSE":

### 1. Narrow Focus
The extension has one clearly defined goal: **download images in high quality**. All features support this single goal:
- Image detection → supports downloading
- Quality analysis → ensures highest quality download
- Bulk download → efficient way to download multiple images
- Preview grid → helps user select images to download

### 2. Easy to Understand
A user can explain this extension in one sentence: *"It downloads all images from a webpage in the highest quality available."*

### 3. No Feature Creep
The extension does not:
- Edit images
- Manage bookmarks
- Block ads
- Change browser settings
- Provide productivity tools
- Offer any unrelated features

### 4. All Permissions Support Single Purpose
Every requested permission directly supports image downloading:
- **activeTab** → To access webpage and find images
- **downloads** → To save images to computer
- **scripting** → To analyze page HTML for image sources
- **host_permissions** → To work on any website (not limited to specific domains)

---

## COMPARISON WITH CHROME WEB STORE POLICY:

### ✅ COMPLIANT - Our Extension:
**Single Purpose:** Download images in high quality  
**All features support this purpose:** Yes  
**Easy to understand:** Yes  
**Narrow focus:** Yes  

### ❌ NON-COMPLIANT - Example (What we DON'T do):
**Multiple Purposes:** Download images + Block ads + Manage passwords  
**Unrelated features:** No  
**Broad, unclear focus:** No  

---

## USER BENEFIT:

Users install this extension specifically to solve one problem: **"I want to download high-quality images from websites."**

The extension solves ONLY this problem, with no additional, unrelated functionality.

---

## FEATURE JUSTIFICATION:

Every feature serves the single purpose of downloading high-quality images:

| Feature | How It Supports Single Purpose |
|---------|-------------------------------|
| Scan Button | Initiates image search process |
| Srcset Parser | Identifies highest quality versions |
| Lazy Load Detection | Finds all images, including hidden ones |
| Preview Grid | Helps user see what will be downloaded |
| Download All Button | Efficient bulk downloading |
| Individual Click Download | Selective downloading |
| Quality Indicators | Shows image dimensions to confirm quality |

---

## SUMMARY FOR REVIEWERS:

**Single Purpose:** Download images from webpages in highest available quality

**Everything this extension does:** Find images → Analyze quality → Download images

**Nothing else:** No ads, no tracking, no unrelated features, no feature bloat

**User expectation:** When someone installs "Image Downloader", they expect ONLY image downloading functionality. That's exactly what we provide.

---

## RESPONSE TO COMMON REVIEWER QUESTIONS:

**Q: Why do you need <all_urls> permission for a single purpose?**  
A: To download images from ANY website, not just specific domains. Users want to download images from Pinterest, Unsplash, news sites, etc. This permission allows the extension to work universally while maintaining its single purpose of image downloading.

**Q: Your extension has multiple features (scan, preview, bulk download). Is this violating single purpose?**  
A: No. All features support the SINGLE goal of downloading images in high quality. They are different methods to accomplish the same purpose, not different purposes.

**Q: Could this extension be doing something else in the background?**  
A: No. Our code is open source and can be reviewed. We have zero external API calls, zero data collection, and zero background processes unrelated to image downloading.

---

**FINAL STATEMENT:**

This extension has ONE purpose: **Download images in their highest available quality.**  

Every line of code, every feature, and every permission supports this single, narrow, easy-to-understand purpose.

---

Version: 1.0.0  
Developer: Anujch8889  
Extension Type: Image Downloader (Single Purpose)
