/* chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.sendMessage(details.tabId, { action: "checkForAds" });
}, { url: [{ urlMatches: 'https://www.youtube.com/*' }] });

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if the URL contains "googleads.g.doubleclick.net" or "doubleclick.net"
    if (details.url.includes("googleads.g.doubleclick.net") || details.url.includes("doubleclick.net") || details.url.includes("googleusercontent.com")) {
      console.log("Blocking URL: " + details.url);
      return { cancel: true };
    }
    return { cancel: false };
  },
  { urls: ["*://*.doubleclick.net/*", "*://*.googleads.g.doubleclick.net/*", "*://*.googleusercontent.com/*"] }, // Match all subdomains and paths
  ["blocking"]
); */

// UNCOMMENT TO BLOCK REQUESTS OF ADS SINCE ANTI-VIRUS IS TRIGGERED.
