const cachedApiCall = function(time){
    // your code goes here...
    let cache = {}
    return function call(url,args){
        return new Promise((resolve,reject)=>{
            let key = url + JSON.stringify(args)
        if(cache[key] && cache[key].expiry > Date.now()){
            console.log("Returning cached results")
            resolve(cache[key].data)
        }else{
            console.log("Making a new api call")
            fetch(url).then((resp)=>{
                let res = resp.json()
                cache[key] = {data:res, expiry: Date.now() + time}
                resolve(res)
            }).catch((e)=>{
                reject(e)
            })
        }
        })
        
    }
 };
 
 const call = cachedApiCall(1500);
 
 // first call
 // an API call will be made and its response will be cached
 call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
 //"making new api call"
 /*
 {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 }
 */
 
 // cached response will be returned
 // it will be quick
 setTimeout(() => {
   call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
 }, 700);
 /*
 {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 }
 */
 
 // a fresh API call is made
 // as time for cached entry is expired
 setTimeout(() => {
   call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
 }, 2000);
 //"making new api call"
 /*
 {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 }
 */