function promiseAll(tasks){
    let results = new Array(tasks.length);
    let completedCount = 0
    return new Promise((resolve,reject)=>{
        tasks.forEach((task,index) => {
            task.then((result)=>{
                console.log("here")
                results[index] = result
                completedCount++;
                if(completedCount===tasks.length){
                    resolve(results)
                }
            }).catch((error)=>{
                reject(error)
            })
        });
    })
}

// function task(time) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(time);
//       }, time);
//   }); }
//   const taskList = [task(1000), task(6000), task(3000)];
//   //run promise.all
//   promiseAll(taskList)
//     .then(results => {
//       console.log("got results", results)
//     })
//     .catch(console.error);

Input:
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
        if(time < 3000){
          reject("Rejected");
        }else{
          resolve(time);
        }
  }, time); });
  }
  const taskList = [task(1000), task(5000), task(3000)];
  //run promise.all
  promiseAll(taskList)
    .then(results => {
      console.log("got results", results)
    })
    .catch(console.error);
// Promise.all(taskList).then((r)=>{console.log(r)}).catch(e=>console.log(e))