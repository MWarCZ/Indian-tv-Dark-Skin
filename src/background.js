// Project: Indian-tv Dark Skin
// Filename: src/background.js

// Kompatibilita s prohlížeči
chrome = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();


// status: 1=on 0=off
if(!localStorage.status) {
  localStorage['status'] = 1;
}

/// Preklapi nastveny status
function toggle() {
  localStorage['status'] = (localStorage.status == 1) ? 0 : 1;

  chrome.tabs.executeScript({
     code: 'setStatus(' + localStorage.status + '); classNow();'
  });
}

/// Nastavi ikonu odpovidajici aktualnimu stavu.
function iconNow(tabId) {
  chrome.pageAction.setIcon({tabId: tabId, path: (localStorage.status == 1) ? "icon/indian-red.png" : "icon/indian-black.png"});
}

function checkForValidUrl(tabId, changeInfo, tab) {
  if(tab.url.startsWith("https://indian-tv.cz")) {
    chrome.pageAction.show(tabId);
    iconNow(tabId);
  }
}

/// Kliknutí na ikonu
chrome.pageAction.onClicked.addListener(function(tab) {
    toggle();
    iconNow(tab.id);
});

chrome.tabs.onUpdated.addListener(checkForValidUrl);


// EndOfFile: src/background.js
