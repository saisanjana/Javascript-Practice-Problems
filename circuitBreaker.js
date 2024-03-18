const circuitBreaker = function(callback, retries, delay){
    // ... your code goes here
    let isClosed = false;
    let lastFailed = null;
    let retryCount = 0;
    return function(...args){
        if(isClosed){
            if(Date.now() > lastFailed + delay){
                isClosed = false;
            }else{
                console.log("Service Unavailable")
                return;
            }
        }
            try{
                // console.log("here")
                let res = callback(...args);
                retryCount = 0;
                return res;
            }catch{
                retryCount += 1;
                console.log("error")
                if(retryCount>=retries){
                    isClosed = true;
                    lastFailed = Date.now()
                }
            }

        
    }

  }
  
  
  // test function
  const testFunction = () => {
    let count = 0;
    
    return function(){
      count++;
      if(count < 4){
        throw "failed";
      }else{
        return "hello";
      }
    }
  };
  
  
  let t = testFunction();
  let c = circuitBreaker(t, 3, 200);
  
  c(); // "error"
  c(); // "error"
  c(); // "error"
  
  // service is closed for 200 MS
  c(); // "service unavailable" 
  c(); // "service unavailable"
  c(); // "service unavailable"
  c(); // "service unavailable"
  c(); // "service unavailable"
  
  // service becomes available after 300ms
  setTimeout(() => {console.log(c());}, 300); // "hello";