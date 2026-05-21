# Quick Oxford Lookup

A lightweight, non-intrusive Microsoft Edge and Google Chrome extension that allows you to instantly search selected text on the **Oxford Learner's Dictionary** via customizable keyboard shortcuts.

The dictionary page loads in a dedicated, single-instance floating window that stays out of your way without cluttering your browser tabs.

---

## Key Features

- **Instant Lookup:** Highlight any word on any web page and press your hotkey to immediately see its definition.
- **Smart Window Reuse:** Instead of cluttering your workspace with countless browser windows or tabs, the extension automatically reuses the same popup window.
- **Browse History Maintained:** Reusing the window preserves your navigation history, allowing you to use the standard **Back / Forward** buttons to review previously searched words.
- **Intelligent Search Redirects:** Leverages Oxford's search engine, meaning inflected words (e.g., searching "biggest" or "running") automatically redirect to their base forms ("big" or "run").
- **Double Layout Modes:** Supports both a compact standard popup and a spacious large window popup to review details or horizontal examples.
- **Clean Workspace:** Positioned slightly away from the right edge of your screen, keeping your reading materials visible.
- **Zero-Warning Permission Profile:** Uses local storage API which requires no intrusive or scary browser warnings on installation.

---

## Default Keyboard Shortcuts

| Platform | Standard Popup (Normal Size) | Large Popup (Expanded Size) |
| :--- | :--- | :--- |
| **macOS** | `Command + E` | `Command + Shift + E` |
| **Windows / Linux** | `Ctrl + E` | `Ctrl + Shift + E` |

Please verify and re-define shortcuts after installation if needed, via: 
```bash
edge://extensions/shortcuts
```
or 
```bash
chrome://extensions/shortcuts
```
Then scroll down to Quick Oxford Lookup and check:
```bash
Text lookup (Normal popup)

Text lookup (Large window popup)
```
---

## Installation Guide

### 1. Browser Add-on Stores
* **Chrome Web Store:** *Coming soon (under review).* Please follow the **Local Installation** guide below to install and use it immediately.
* **Edge Add-ons Store:** *Coming soon (under review).* Please follow the **Local Installation** guide below.

### 2. Local Installation (Load Unpacked Extension)
Since store releases are pending review, you can install the extension locally in less than a minute:

i. **Download the Code:**
   Click the green **Code** button at the top right of this page and select **Download ZIP**, then extract the file on your computer. Alternatively, clone the repository:
   ```bash
   git clone https://github.com/nguyen-an13/QuickLookup-Oxford-
   ```

ii. **Open Extensions Page:**
- Open your browser and navigate to:
For Microsoft Edge: ``` edge://extensions/ ```
For Google Chrome: ``` chrome://extensions/ ```

iii. **Enable Developer Mode:**
Turn on the Developer mode toggle (usually located in the bottom-left sidebar or top-right corner of the page).

iv. **Load the Unpacked Folder:**
Click the Load unpacked button at the top.

v. **Select Folder:**
Browse and select the extracted folder containing manifest.json and background.js.

vi. **Done!** The extension is now successfully installed. Try highlighting a word and pressing your hotkey! Enjoy your time!

## Updates
If you have any comment, please feel free to reach out to me in [`Issues`](https://github.com/nguyen-an13/QuickLookup-Oxford-/issues) or make a [`PR`](https://github.com/nguyen-an13/QuickLookup-Oxford-/pulls). Thanks!
