const sum = (...args) => {
    // your code goes here ... 
    let res = [...args];
    console.log(args)
    if(args.length === 0){
        return res.reduce((a,c)=>a+c,0);
    }else{
        let temp = function(...args1){
            res.push(...args1);
            if(args1.length ===0){
                return res.reduce((a,c)=>a+c,0);
            }else{
                return temp;
            }
        }
        return temp;
    }


}
   
   
   const res = sum(1, 2, 3, 4)();
   const res2 = sum(1)(2)(3)(4)();
   const res3 = sum(1, 2)(3, 4)();
   const res4 = sum(1, 2, 3)(4)();
   const res5 = sum(1)(2, 3, 4)();
   const res6 = sum();
   
   console.log(res, res2, res3, res4, res5, res6);
   
   // Output:
   // 10 10 10 10 10 0