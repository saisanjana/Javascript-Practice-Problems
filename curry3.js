const curry = function(callback, argCount){
    // ... your code goes here
    
    let temp =  function(...args){
        if(args.length >= argCount){
            return callback(...args)
        }else{
            return function(...args1){
                return temp(...args,...args1)
            }
        }
    }
    return temp;
  }
  
  function sum(a, b, c, d) {
    return a + b + c + d;
  }
  
  let curriedSum = curry(sum, 4);
  console.log(curriedSum(1,2,3,4,5));
  console.log(curriedSum(1)(2,3)(4));
  console.log(curriedSum(1)(2)(3)(4));
  
  // 10
  // 10
  // 10