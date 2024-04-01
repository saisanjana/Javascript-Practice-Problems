function promiseAny(tasks){
    let errorResults = new Array(tasks.length);
    let c =0;
    return new Promise((resolve,reject)=>{
        tasks.forEach((task,index) => {
            task.then((result)=>{
                resolve(result)
            }).catch((error)=>{
                console.log(error)
                errorResults[c++] = error
                if(c===tasks.length){
                    reject(errorResults)
                }
            })
        });
    })
}

// const test1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, 'one');
//   });
//   const test2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 600, 'two');
//   });
//   const test3 = new Promise(function (resolve, reject) {
//     setTimeout(reject, 200, 'three');
//   });
//   promiseAny([test1, test2, test3]).then(function (value) {
//     // first and third fails, 2nd resolves
//     console.log(value);
//   }).catch(function (err){
//     console.log(err);
//   });

const test1 = new Promise(function (resolve, reject) {
    setTimeout(reject, 500, 'one');
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(reject, 600, 'two');
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, 'three');
});
promiseAny([test1, test2, test3]).then(function (value) {
  console.log(value);
}).catch(function (err){
  // all three fails
  console.log(err);
});

