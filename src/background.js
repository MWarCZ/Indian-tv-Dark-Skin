// Project: Indian-tv Dark Skin
// Filename: src/background.js

/**
 * Kompatibilita mezi prohlížeči.
 * EN: Cross-browsers compatibility.
 */
chrome = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

// status dark skin: 1=on 0=off
if(!localStorage.status) {
  localStorage['status'] = 1;
}

/**
 * Preklopeni stavu pro vyber akce prideleni/odebrani tridy dark.
 * EN: Toggle status for select action add/remove class (dark).
 * @param {0|1} value (0=remove, 1=add, other=nothing)
 */
function toggle() {
  // Extension
  localStorage['status'] = (localStorage.status == 1) ? 0 : 1;
  // Web
  chrome.tabs.executeScript({
     code: 'setStatus(' + localStorage.status + '); classNow();'
  });
}

/**
 * Nastaveni ikony doplnku dle aktualniho stavu.
 * EN: Set extension's icon according to current status.
 */
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
