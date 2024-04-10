function mapLimit(tasks,limit,callback){
    let tasksWithLimit  = []
    while(tasks.length>limit){
        tasksWithLimit.push(tasks.slice(0,limit))
        tasks = tasks.slice(limit)
    }
    if(tasks.length>0){
        tasksWithLimit.push(tasks)
    }
    return new Promise((resolve,reject)=>{
        let final = tasksWithLimit.reduce((acc,curr)=>{
            return acc.then((value)=>{
                return new Promise((resolve,reject)=>{
                    let results = [];
                    let tasks = 0;
                    curr.forEach(element => {
                        callback(element,(error,cb)=>{
                            if(error){
                                reject(error);
                            }else{
                                results.push(cb);
                                tasks++;
                                if(tasks>=curr.length){
                                    resolve([...value,...results])
                                }
                            }
                        })
                    });
                })
            })
        },Promise.resolve([]));

        final.then((val)=>{
            resolve(val);
        }).catch((e)=>{
            reject(e)
        })
    })
}


// let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
//     // i am async iteratee function
//     // do async operations here
//     setTimeout(function () {
//       num = num * 2;
//       console.log(num);
//       callback(null, num);
//   }, 1000); });
//   numPromise
//     .then((result) => console.log("success:" + result))
//     .catch(() => console.log("no success"));
let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
    setTimeout(function () {
      num = num * 2;
      console.log(num);
      // throw error
      if(num === 6){
        callback(true);
      }else{
        callback(null, num);
  }
  }, 2000); });
  numPromise
    .then((result) => console.log("success:" + result))
    .catch(() => console.log("no success"));
  