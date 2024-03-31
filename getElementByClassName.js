const findByClass = function(className){
    // ... your code goes here...
    let result  = []
    let root = document.getElementById('root')
    // console.log(root.childNodes)
    return checkClassInElement(className,root,result)
    
}

const checkClassInElement = (className, node,result) => {
    if(!node){
        return null;
    }else{
        if(node.className === className){
            result.push(node);
        }
        node.childNodes.forEach(element => {
            checkClassInElement(className,element,result)
        });
        return result
    }
}
  
  console.log(findByClass('a'));