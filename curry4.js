
const add = function(...args){
    // ... your code goes here
    add.args.push(...args);
    return add;

}
add.args  = [];
add.value = function value(){
    let res = add.args.reduce((a,c)=>a+c,0);
    add.args  = [];
    return res;
}
add.valueOf = add.value;
  console.log(add.value())
  console.log(add(1)(2).value() == 3); 
  console.log(add(1, 2)(3).value() == 6); 
  console.log(add(1)(2)(3).value() == 6); 
  console.log(add(1)(2) + 3);
  
  // Output:
  // true
  // true
  // true
  // 6