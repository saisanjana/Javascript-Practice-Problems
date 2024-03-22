const obj = {
    a:{
        b:{
            c:[1,2,3]
        }
    }
}

function get(obj,strPath){
    let res = obj
    for(let i=0;i<strPath.length;i++){
        ele = strPath[i]
        if(ele!=="." && ele!=="[" && ele!=="]"){
            res = res[ele]
        }
    }
    return res

}

console.log(get(obj,'a.b.c'))
console.log(get(obj,'a.b.c.0'))
console.log(get(obj,'a.b.c[1]'))
console.log(get(obj,'a.b.c[3]'))
