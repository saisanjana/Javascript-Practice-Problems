async function mapSeries(tasks,callback){
    return new Promise(async (resolve,reject)=>{
        let result = []
        for(element of tasks){
            await callback(element,(error,num)=>{
                if(error){
                    reject();
                }else{
                    result.push(num)
                    if(result.length === tasks.length){
                        resolve(result)
                    }
                }
            })
        }
    })
}



let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
    // i am async iteratee function
    // do async operations here
    setTimeout(function () {
      num = num * 2;
      console.log(num);
      // throw error
      if(num === 12){
        callback(true);
      }else{
        callback(null, num);
  }
  }, 1000); });
  numPromise
    .then((result) => console.log("success:" + result))
    .catch(() => console.log("no success"));
let num1Promise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
    setTimeout(function () {
      num = num * 2;
      console.log(num);
      // throw error
      if(num === 8){
        callback(true);
      }else{
        callback(null, num);
  }
  }, 2000); });
  num1Promise
    .then((result) => console.log("success:" + result))
    .catch(() => console.log("no success"));