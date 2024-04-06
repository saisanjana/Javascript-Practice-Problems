async function asyncFunctionsInParallel(events){
    events.forEach((event)=>{
        event.then((val)=>{
            console.log(val)
        })

    })
}

function setTimeoutFunc(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("completed "+time)
        },time)
    })
}

let events = [setTimeoutFunc(3),setTimeoutFunc(2),setTimeoutFunc(1)]
asyncFunctionsInParallel(events)