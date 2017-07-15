

// status: 1=on 0=off
if(!localStorage.status) {
  localStorage['status'] = 1;
}


function toggle() {
  localStorage['status'] = (localStorage.status == 1) ? 0 : 1;
}
function iconnow() {
  chrome.browserAction.setIcon({path: (localStorage.status == 1) ? "indian-red.png" : "indian-black.png"});
}
function toggleClass(){
  
  chrome.tabs.executeScript({
     code: 'if ( document.URL.startsWith("https://indian-tv.cz") ) { var cl = "dark"; var x = document.body.classList; if(x.contains(cl)){ x.remove(cl); } else { x.add(cl); } } '
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
    toggle();
    iconnow();
    toggleClass();
});

chrome.webNavigation.onCommitted.addListener(function(details) {
    if (localStorage.status == 1) {
      chrome.tabs.executeScript(details.tabId, {
          code: 'if ( document.URL.startsWith("https://indian-tv.cz") ) { var cl = "dark"; var x = document.body.classList; if(x.contains(cl)){ x.remove(cl); } else { x.add(cl); } }'
      });
    }
}, { url: [{ hostPrefix: 'indian-tv.cz'}] } );

