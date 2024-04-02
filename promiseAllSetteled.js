function promiseAllSettled(tasks){
    let results = tasks.map(task=>{
        return task.then((value)=>({status:"fullfilled",val:value}),(err)=>({status:"rejected",err:err}))
    })
    return Promise.all(results)
}
const a = new Promise((resolve) => setTimeout(() => { resolve(3) },200));
const b = new Promise((resolve,reject) => reject(9));
const c = new Promise((resolve) => resolve(5));
promiseAllSettled([a, b, c]).then((val)=> {console.log(val)});
