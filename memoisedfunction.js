const memoize = function(cb){
    // your code goes here
    let memos = {}
    return function(arg){
        if(memos[arg]){
            console.log("cached")
            return memos[arg];
        }else{
            console.log("calculate")
            memos[arg] = cb(arg)
            return memos[arg];
        }
    }
  }
  
  function factorial(n) {
     if(n === 0 || n === 1) {
       return 1
     }
     return factorial(n-1) * n; 
  }
  
  const memoizedFactorial = memoize(factorial)
  let a = memoizedFactorial(100) // slow
  console.log(a); //9.33262154439441e+157 // slow
  
  let b = memoizedFactorial(100) // faster
  console.log(b); //9.33262154439441e+157 // faster
  
  
  