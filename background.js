chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || tabs.length === 0) return;
    const activeTab = tabs[0];
    
    // Skip browser system pages (e.g., edge://, chrome://)
    if (activeTab.url && (activeTab.url.startsWith("edge://") || activeTab.url.startsWith("chrome://") || activeTab.url.startsWith("about:"))) {
      return;
    }

    // Get the selected text and screen dimensions
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: () => {
        return {
          text: window.getSelection().toString(),
          screenWidth: window.screen.availWidth,
          screenHeight: window.screen.availHeight
        };
      }
    })
    .then((results) => {
      if (!results || results.length === 0) return;
      const { text, screenWidth, screenHeight } = results[0].result;
      
      if (text && text.trim().length > 0) {
        const query = text.trim().toLowerCase();
        const targetUrl = `https://www.oxfordlearnersdictionaries.com/search/english/?q=${encodeURIComponent(query)}`;
        
        let popupWidth = 450;
        let popupHeight = 650;
        
        if (command === "lookup-oxford-large") {
          // Custom dimensions for the large window
          const targetWidth = Math.round(1100);  
          const targetHeight = Math.round(1200); 
          
          popupWidth = screenWidth ? Math.min(screenWidth - 60, targetWidth) : targetWidth;
          popupHeight = screenHeight ? Math.min(screenHeight - 100, targetHeight) : 800;
        }

        const leftPosition = screenWidth ? (screenWidth - popupWidth - 70) : 900;
        const topPosition = 50; 

        // Retrieve the saved window ID from local storage
        chrome.storage.local.get(["oxfordWindowId"], (result) => {
          const windowId = result.oxfordWindowId;
          
          if (windowId) {
            // Check if this window still exists on the screen
            chrome.windows.get(windowId, { populate: true }, (win) => {
              if (chrome.runtime.lastError || !win) {
                // If the window was closed, create a new one
                createAndSaveWindow(targetUrl, popupWidth, popupHeight, topPosition, leftPosition);
              } else {
                // If the window is still open, reuse it
                // 1. Resize/position based on current command and bring it to focus
                chrome.windows.update(windowId, {
                  width: Math.round(popupWidth),
                  height: Math.round(popupHeight),
                  top: Math.round(topPosition),
                  left: Math.round(leftPosition),
                  focused: true
                }, () => {
                  // 2. Update the current tab URL (preserves navigation history for Back button)
                  const tabId = win.tabs[0].id;
                  chrome.tabs.update(tabId, { url: targetUrl });
                });
              }
            });
          } else {
            // First run, no saved ID -> Create a new window
            createAndSaveWindow(targetUrl, popupWidth, popupHeight, topPosition, leftPosition);
          }
        });
      }
    })
    .catch((err) => {
      console.error("Error executing script: ", err);
    });
  });
});

// Helper function to create a new window and save its ID
function createAndSaveWindow(url, width, height, top, left) {
  chrome.windows.create({
    url: url,
    type: "popup",
    width: Math.round(width),
    height: Math.round(height),
    top: Math.round(top),
    left: Math.round(left)
  }, (newWindow) => {
    if (newWindow) {
      // Save the new window ID to local storage
      chrome.storage.local.set({ oxfordWindowId: newWindow.id });
    }
  });
}
