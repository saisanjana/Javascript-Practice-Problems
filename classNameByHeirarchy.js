const getByClassNameHierarchy = function(classPath){
    //... your code goes here
    let styles = classPath.split(">");
    let root = document.getElementById("root")
    let result = [];
    traverseDOM(root, styles,0,result);
    return result;

  };
  const traverseDOM = (element, styles,index,result) => {
    if(!element){
      return;
    }
    if(index==styles.length-1 && (element.classList.contains(styles[index]))){
      result.push(element);
      return;
    }
    // console.log(element.children)
    for(ele of element.children){
      // console.log(ele.classList)
      if(element.classList.contains(styles[index])){
        traverseDOM(ele, styles,index+1,result);
      }else{
        traverseDOM(ele,styles,0,result)
      }
    };
  }
  console.log(getByClassNameHierarchy("a>b>c"));