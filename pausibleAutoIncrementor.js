function timer(initial,step){
    let value = initial;
    let timer = null;
    
    let startTimer = function(){
        timer = setInterval(()=>{
            console.log(value);
            value+=step;
        },1000)
    }
    let stopTimer = function(){
        clearInterval(timer);
    }
    return{
        startTimer,stopTimer
    }

}

const timerObj = timer(10, 10);
//start
timerObj.startTimer();
//stop
setTimeout(() => {
    timerObj.stopTimer();
}, 5000);