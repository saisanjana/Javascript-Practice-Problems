const pipe = (obj) => {
    // ... your code goes here
    return function(...args){
        let res ={}
        Object.keys(obj).forEach((key)=>{
            console.log(key, typeof obj[key])
            if(typeof obj[key] === 'object'){
                res[key] = pipe(obj[key])(...args)
            }else if(typeof obj[key] === 'function'){
                res[key] = obj[key](...args)
            }else{
                res[key] = obj[key]
            }
        })
        return res;
    }
  }
  
  
  let test = {
      a: {
          b: (a, b, c) => a + b + c,
          c: (a, b, c) => a + b - c,
      },
      d: (a, b, c) => a - b - c,
      e: 1,
      f: true
  };
  
  console.log(pipe(test)(1, 1, 1));
  
  // expected output
  // {
  //   "a": {
  //     "b": 3,
  //     "c": 1
  //   },
  //   "d": -1,
  //   "e": 1,
  //   "f": true
  // }