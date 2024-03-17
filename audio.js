var inhale = new Audio()
    inhale.src = "inhale.mp3"
    var exhale = new Audio()
    exhale.src = 'exhale.mp3'
var play = true;
async function createBreath() {
    for(let i=0;i<10;i++){
        if(play){
        inhale.play();
        await sleep(4000);
        exhale.play();
        await sleep(4000);
        }
    }
}

function stopBreath(){
    play = false;
    inhale.pause();
    inhale.currentTime = 0;
    exhale.pause();
    exhale.currentTime = 0;
}

function sleep(delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
        }, delay);
    })
}