'use strict';


const stopwatch=document.getElementById('stopwatch');
const resetID=document.getElementById('btn-reset');
const startID=document.getElementById('btn-start');
const stopID=document.getElementById('btn-stop');

let hr=0;
let min=0;
var stoptime = true;
const reset=function(){
    console.log("00:00");
    document.getElementById('stopwatch').textContent="00:00";
    stoptime = true;
    hr = 0;
    min = 0;
}
const stop=function(){
        if (stoptime == false) {
          stoptime = true;
        }
}
const start=function(){
    console.log("Start Counting");
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function timerCycle() {
    if (stoptime == false) {
    min = parseInt(min);
    hr = parseInt(hr);
    console.log(hr,min);
    min=min+1;
    if (min == 60) {
      hr = hr + 1;
      min = 0;
    }

    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    console.log(hr,min);
    stopwatch.textContent = hr + ':' + min ;

    setTimeout("timerCycle()", 100);
  }
}
resetID.addEventListener('click', reset);
startID.addEventListener('click', start);
stopID.addEventListener('click', stop);