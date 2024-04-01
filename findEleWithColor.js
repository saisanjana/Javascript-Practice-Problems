function Bike(model, color) {
    this.model = model;
    this.color = color;
    this.say = function(){
        console.log(this.model)
    }
  }
  let b = new Bike("hey","white")
  b.say();
  
//   Bike.prototype.getDetails = function () {
//     return this.model + " bike has" + this.color + " color";
//   };

const findElementByColor = (root, color) => {
    // ... your code goes here
    let result  = []
    let hexValue = convertColorToHex(color);
    findNodes(root,hexValue,result)
    return result;   

}
const convertColorToHex = async (color) =>{
    // console.log(color)
    let newElement = document.createElement('div');
    newElement.style.color = color;
    document.body.appendChild(newElement)
    var colors = await window.getComputedStyle(newElement);
    document.body.removeChild(newElement);
    console.log(colors.color)
}

const findNodes = (element,color,result) => {
    if(element.style['color']){
        let hexValue = convertColorToHex(element.style['color']);
        if(hexValue === color){
            result.push(element)
        }
    }
    for(child of element.children){
        findNodes(child,color,result);
    }
}
   
   
console.log(findElementByColor(document.getElementById('root'), 'white'));