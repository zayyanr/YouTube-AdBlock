if (chrome.declarativeNetRequest) {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: 'block'
        },
        condition: {
          urlFilter: '*://*.*.doubleclick.net/*',
          resourceTypes: ['sub_frame', 'main_frame', 'script', 'image', 'xmlhttprequest']
        }
      },
      {
        id: 2,
        priority: 1,
        action: {
          type: 'block'
        },
        condition: {
          urlFilter: '*://*.googleads.g.doubleclick.net/*/*',
          resourceTypes: ['sub_frame', 'main_frame', 'script', 'image', 'xmlhttprequest']
        }
      },
      {
        id: 3,
        priority: 1,
        action: {
          type: 'block'
        },
        condition: {
          urlFilter: '*://*.googleusercontent.com/*',
          resourceTypes: ['sub_frame', 'main_frame', 'script', 'image', 'xmlhttprequest']
        }
      }
    ],
    removeRuleIds: [1, 2, 3]
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error updating dynamic rules:', chrome.runtime.lastError);
    }
  });
} else {
  console.error('Declarative Net Request API is not available');
}

chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.sendMessage(details.tabId, { action: "checkForAds" });
}, { 
  url: [
    { hostContains: 'youtube.com' }
  ]
});

console.log('declarativeNetRequest:', chrome.declarativeNetRequest);
console.log('webNavigation:', chrome.webNavigation);
console.log('webRequest:', chrome.webRequest);
