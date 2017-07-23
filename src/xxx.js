

function setStatus(value=1) {
  localStorage['status'] = value;
}
function classNow() {
  var cl = "dark"; 
  var x = document.body.classList; 
  if(localStorage.status == 1) {
    x.add(cl); 
  }
  else if (localStorage.status == 0) {
    x.remove(cl);
  }
}


if(!localStorage.status) {
  setStatus();
}

classNow();
