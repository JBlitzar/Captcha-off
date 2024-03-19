
var seconds=60;
var timer;

function countdown() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
     window.stopped = true;
      document.getElementById("check").disabled = true;
      timer = null;
      window.submit()
  }
}
window.start = function() {
    document.getElementById("check").disabled = false
    grecaptcha.reset()
    seconds = 60;
    window.count = 0;
    window.tokens = []
    window.stopped = false;
    document.getElementById("timer").innerHTML = "1:00";
  if(!timer) {
    timer = window.setInterval(function() { 
      countdown();
    }, 1000); // every second
  }
}

document.getElementById("timer").innerHTML="1:00"; 
document.getElementById("start").onclick = window.start;