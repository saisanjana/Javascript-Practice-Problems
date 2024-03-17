const fetchWithTimeout = function(url,timeout){
    // ... your code goes here
    return new Promise((resolve,reject)=>{
        let cancelToken = new AbortController()
        let result = fetch(url,{signal:cancelToken.signal});
        let data = false;
        result.then((e)=>{
            data = true
            resolve(e)
        }).catch((e)=>{
            data= true;
            reject(e)
        })
        setTimeout(()=>{
            if(!data){
                cancelToken.abort("Aborted");
                reject("error")
            }
        },timeout)

    

    })
    
  
  
  }
  
  
  fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then((resp) => {
    console.log(resp);
  }).catch((error) => {
    console.error(error);
  });
  
  // Aborted
  // error