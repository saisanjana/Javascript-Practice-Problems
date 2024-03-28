const filterObject = (arr, aggVal) => {
    //... your code goes here
    if(typeof aggVal === "number"){
        return arr[aggVal]
    }else{
        let index = null;
        arr.forEach((element,ind) => {
            let values = Object.values(element);
            if(values.indexOf(aggVal) !== -1){
                index = ind
            }
        });
        if(index>=0){
            return arr[index]
        }else{
            return undefined
        }
    }
  };
  
  const arr = [
    { name: "Amir", id: "1" },
    { name: "Samlan", id: "2" },
    { name: "Shahrukh", id: "0" },
  ];
  
  console.log(filterObject(arr, 0)); 
  console.log(filterObject(arr, "Amir")); 
  console.log(filterObject(arr, "0")); 
  console.log(filterObject(arr, "-1"));
  
  // Output:
  // { name: "Amir", id: "1" }
  // { name: "Amir", id: "1" }
  // { name: "Shahrukh", id: "0" }
  // undefined