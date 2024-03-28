const aggregate = (arr, on, who) => {
    // ... your code goes here
    let map = {};
    arr.forEach(element => {
        if(map[element[on]]){
            map[element[on]][who].push(element[who])
        }else{
            map[element[on]] = {[on]:element[on],[who]:[element[who]]}
            console.log(map)
        }
    });
    return Object.values(map)

  }
  
  const endorsements = [ 
    { skill: 'css', user: 'Bill' }, 
    { skill: 'javascript', user: 'Chad' }, 
    { skill: 'javascript', user: 'Bill' }, 
    { skill: 'css', user: 'Sue' }, 
    { skill: 'javascript', user: 'Sue' }, 
    { skill: 'html', user: 'Sue' } 
  ];
  
  console.log(aggregate(endorsements, "skill", "user"));
  
  // Output:
  // [
  //   {
  //     "skill": "css",
  //     "user": [
  //       "Bill",
  //       "Sue"
  //     ]
  //   },
  //   {
  //     "skill": "javascript",
  //     "user": [
  //       "Chad",
  //       "Bill",
  //       "Sue"
  //     ]
  //   },
  //   {
  //     "skill": "html",
  //     "user": [
  //       "Sue"
  //     ]
  //   }
  // ]