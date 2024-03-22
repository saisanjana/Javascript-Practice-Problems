const parse = (str, markups) => {
    
    let track = new Array(str.length).fill([])
    
    for(ele of markups){
        addAndSort(track,ele[0],new Tag(ele[0],ele[1],ele[2]))
    }
    
    let stack = [new Tag(0,10000000,"")]
    for(let i=0;i<str.length;i++){
        console.log(i)
        while(track[i] && track[i].length){
            let ele = track[i].shift();
            ele.text = `<${ele.tag}>`
            let peek = stack[stack.length -1];
            console.log(ele,peek)
            if(ele.end > peek.end){
                let split = new Tag(peek.end+1, ele.end,ele.tag);
                addAndSort(track,peek.end+1,split)
                ele.end = peek.end;
                stack.push(ele);
            }else{
                stack.push(ele);
            }
        }
        let peek = stack[stack.length-1];
        peek.text += str[i];
        console.log(peek,i)
        while(peek.end === i ){
            let shift = stack.pop();
            shift.text+=`</${shift.tag}>`
            peek = stack[stack.length-1];
            peek.text += shift.text;
        }
        // console.log(stack)
    }
    return stack[0].text

}

function Tag(start,end,tag){
    this.start = start;
    this.end = end;
    this.tag = tag;
    this.text="";
    this.getRange = function(){
        return this.end - this.start;
    }
}
function addAndSort(track,index,tag){
    track[index] = [...track[index],tag]
    track[index].sort((a,b)=>{
        a.getRange() > b.getRange();
    })
}


  
  const encoded = parse('Hello, World', [[0, 2, "i"], [7, 10, "u"], [4, 9, "b"], [2, 7, "i"], [7, 9, "u"]]);
  console.log(encoded);
  
  //Output:
  //"<i>He<i>l</i></i><i>l<b>o, <u><u>W</u></u></b></i><b><u><u>or</u></u></b><u>l</u>d"
  