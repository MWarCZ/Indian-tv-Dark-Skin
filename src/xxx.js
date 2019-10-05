// Project: Indian-tv Dark Skin
// Filename: src/xxx.js

/**
 * Nastaveni stavu pro vyber akce prideleni/odebrani tridy dark.
 * EN: Set status for select action add/remove class (dark).
 * @param {0|1} value (0=remove, 1=add, other=nothing) 
 */
function setStatus(value=1) {
  localStorage['status'] = value;
}
/**
 * Funkce prida nebo odebere tridu (dark) v elementu body dle nastaveneho statusu.
 * EN: Function adds or removes class (dark) in body element according to set status.
 */
function classNow() {
  var darkSkinClass = "dark"; 
  var bodyClassList = document.body.classList; 
  if(localStorage.status == 1) {
    bodyClassList.add(darkSkinClass); 
  }
  else if (localStorage.status == 0) {
    bodyClassList.remove(darkSkinClass);
  }
}


if(!localStorage.status) {
  setStatus();
}
classNow();

// EndOfFile: src/xxx.js
