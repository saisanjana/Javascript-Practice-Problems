const pipe = (...callbacks) => {
    // your code goes here...
    return function(person){
        console.log(callbacks)
        let res = person;
        callbacks.forEach((cb)=>{
            res = cb(res)
        })
        return res;
    }
  }
  
  
  const getSalary = (person) => person.salary
  const addBonus = (netSalary) => netSalary + 1000;
  const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);
  
  const val = { salary: 10000 };
  
  const result = pipe(
    getSalary,
    addBonus,
    deductTax 
  )({ salary: 10000 });
  
  console.log(result);
  // 7700