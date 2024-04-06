async function asyncFunctionsInSeries(events){
    // for(eve of events){
    //     try{
    //         let val = await eve;
    //         console.log(val)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    events.reduce((acc,curr)=>{
        return acc.then(()=>{
            return curr.then((val)=>{
                console.log(val)
            })
        })
    },Promise.resolve())
}

function setTimeoutFunc(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("completed "+time)
        },time)
    })
}

let events = [setTimeoutFunc(3),setTimeoutFunc(2),setTimeoutFunc(1)]
asyncFunctionsInSeries(events)