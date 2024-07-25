const removeSponsoredContentOnHome = () => {
  const findAndRemoveSponsoredContent = () => {
    const richItemRenderers = document.querySelectorAll('ytd-rich-item-renderer');

    richItemRenderers.forEach(richItemRenderer => {
      const sponsoredElement = richItemRenderer.querySelector('p.style-scope.ytd-badge-supported-renderer');

      if (sponsoredElement && sponsoredElement.textContent.trim().startsWith('Sponsored')) {
        richItemRenderer.remove();
      }
    });
  };

  findAndRemoveSponsoredContent();
};

const removeSponsoredContentOnVideoCompanion = () => {
  const findAndRemoveSponsoredContent = () => {
    const richItemRenderers = document.querySelectorAll('ytd-companion-slot-renderer');

    richItemRenderers.forEach(richItemRenderer => {
      const sponsoredElement = richItemRenderer.querySelector('div.badge-shape-wiz__text');

      if (sponsoredElement && sponsoredElement.textContent.trim().startsWith('Sponsored')) {
        richItemRenderer.remove();
      }
    });
  };

  findAndRemoveSponsoredContent();
};

const removeSponsoredContentOnVideoAd = () => {
  const findAndRemoveSponsoredContent = () => {
    const richItemRenderers = document.querySelectorAll('ytd-ad-slot-renderer');

    richItemRenderers.forEach(richItemRenderer => {
      const sponsoredElement = richItemRenderer.querySelector('div.badge-shape-wiz__text');

      if (sponsoredElement && sponsoredElement.textContent.trim().startsWith('Sponsored')) {
        richItemRenderer.remove();
      }
    });
  };

  findAndRemoveSponsoredContent();
};

const checkForAds = () => {
  const adButton = document.querySelector('.ytp-ad-button-icon');
  const skipAdButton = document.querySelector('.ytp-skip-ad-button');

  if (adButton) {
    const video = document.querySelector('video');
    if (video) {
      video.currentTime = video.duration;
    }
  }

  if (skipAdButton) {
    skipAdButton.click();
  }

};

const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    checkForAds();
    removeSponsoredContentOnHome();
    removeSponsoredContentOnVideoCompanion();
    removeSponsoredContentOnVideoAd();
  });
});

observer.observe(document.body, { childList: true, subtree: true });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkForAds") {
    checkForAds();
    removeSponsoredContentOnHome();
    removeSponsoredContentOnVideoCompanion();
    removeSponsoredContentOnVideoAd();
  }
});