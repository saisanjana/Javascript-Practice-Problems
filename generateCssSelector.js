const root = document.getElementById("root");
const target = document.getElementById("target");

const generateSelector = function(root, target){
  //your code goes here...
    if(target===root){
        return `${root.tagName.toLowerCase()}[id='${root.id}']`
    }else{
        let parentChildren = target.parentElement.children;
        // console.log(parentChildren)
        let index = Object.values(parentChildren).indexOf(target);
        index+=1;
        return generateSelector(root, target.parentElement) + "> " + `${target.tagName.toLowerCase()}:nth-child(${index})`

    }
}

console.log(generateSelector(root, target));

// Output:
// "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"

