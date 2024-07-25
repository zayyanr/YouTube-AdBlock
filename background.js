chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.sendMessage(details.tabId, { action: "checkForAds" });
}, { url: [{ urlMatches: 'https://www.youtube.com/*' }] });
