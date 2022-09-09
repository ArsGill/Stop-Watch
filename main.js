
const timeElement= document.querySelector(`.watch .time`);

const start_it = document.getElementById(`start`);
const stop_it  = document.getElementById(`stop`);
const reset_it = document.getElementById(`reset`);


// we will ser audio clips for stop , start and reset.
var start_a= new Audio();
var stop_a= new Audio();
var reset_a= new Audio();

start_a.src="start.mpeg";
stop_a.src="stop.mpeg";
reset_a.src="reset.mpeg";



let seconds=0;

// we took this interval variable because we want to set this into start function, so that we can
// assosiate it with setinterval. We have set it to null, but when it has value it will start
// and start function will show its work and set interval will start also.
let interval= null;


// here we will make the eventlistener for start button.


start_it.addEventListener(`click`, start);


// also will create eventlistner for stop function...

stop_it.addEventListener(`click`, stop);

//also will create eventlistner for reset function...

reset_it.addEventListener(`click`, reset);



// This is the function where we set our time logic and due to this time actually accelerates. 
function timer(){

     seconds++;
     
     let hr = Math.floor ( seconds /3600);
     let min = Math.floor((seconds - (hr * 3600))/60);
     let sec = seconds % 60;

     if(sec<10) sec= `0`+sec;
     if(min<10) min= `0`+min;
     if(hr<10)  hr = `0`+hr;
     timeElement.innerText= `${hr}:${min}:${sec}`;
     

};

//Now we will create start function to start the timer accoring to our need.

function start(){
    
     if (interval){
        return;
     }
     
     interval= setInterval(timer, 1000);
     start_a.play();
};


function stop(){
    clearInterval(interval);
    interval=null;
    stop_a.play();
};

function reset(){
    // call the stop function 
    //stop();

    // or simply re use the attributes of stop function in reset function.
    clearInterval(interval);
    interval=null;
    seconds=0;
    timeElement.innerText=`00:00:00`;
    reset_a.play();
};













