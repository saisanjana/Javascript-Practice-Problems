const set = (obj, path, value) => {
    // ... your code goes here
    let pathList = path
    if(typeof path === "string"){
        let temp = []
        path=path.replace("[",".")
        path=path.replace("]","")
        temp = path.split(".")
        
        pathList = [...temp];
    }
    console.log(pathList)

    let result = obj;
    for(let i =0;i<pathList.length;i++){
        let ele = pathList[i];
        if(i === (pathList.length -1)){
            result[ele]=value;
        }else{
            if(result[ele]){
                result = result[ele];
            }else{
                if(`${+pathList[i+1]}` === pathList[i+1]){
                    result[ele] = []
                }else{
                    result[ele] = {}
                }
                result = result[ele]
            }
        }
    }

    
  }
  
  const abc = {
    a: {
      b: {
        c: [1, 2, 3]
      },
      d: {
        a: "hello"
      }
    }
  };
  
  const instance1 = JSON.parse(JSON.stringify(abc));
  set(instance1, 'a.b.c', 'learnersbucket');
  console.log(instance1.a.b.c);
  
  const instance2 = JSON.parse(JSON.stringify(abc));
  set(instance2, 'a.b.c.0', 'learnersbucket');
  console.log(instance2.a.b.c[0]);
  
  const instance3 = JSON.parse(JSON.stringify(abc));
  set(instance3, 'a.b.c[1]', 'learnersbucket');
  console.log(instance3.a.b.c[1]);
  
  const instance4 = JSON.parse(JSON.stringify(abc));
  set(instance4, ['a', 'b', 'c', '2'], 'learnersbucket');
  console.log(instance4.a.b.c[2]);
  
  const instance5 = JSON.parse(JSON.stringify(abc));
  set(instance5, 'a.b.c[3]', 'learnersbucket');
  console.log(instance5.a.b.c[3])
  
  const instance6 = JSON.parse(JSON.stringify(abc));
  set(instance6, 'a.c.d[0]', 'learnersbucket');
  // valid digits treated as array elements
  console.log(instance6.a.c.d[0]);
  
  const instance7 = JSON.parse(JSON.stringify(abc));
  set(instance7, 'a.d.01', 'learnersbucket');
  // invalid digits treated as property string
  console.log(instance7.a.d['01']);
  
  const object = { 'a': [{ 'b': { 'c': 3 } }] };
  set(object, 'a[0].b.c', 4);
  console.log(object.a[0].b.c);
  
  set(object, ['x', '0', 'y', 'z'], 5);
  console.log(object.x[0].y.z);
  
  //Output
  // "learnersbucket"
  // "learnersbucket"
  // "learnersbucket"
  // "learnersbucket"
  // "learnersbucket"
  // "learnersbucket"
  // "learnersbucket"
  // 4
  // 5