function highlight(str, words){

    let strWords = str.split(" ");
    let newStrWords  = strWords.map(element => {
        if(words.includes(element)){
            return `<strong>${element}</strong>`;
        }else{
            let output = element;
            for(let i=0;i<element.length;i++){
                let prefix = element.slice(0,i+1)
                let suffix = element.slice(i+1)
                if(words.includes(prefix) && words.includes(suffix)){
                    output = `<strong>${prefix}${suffix}</strong>`
                }else if(words.includes(prefix)){
                    output = `<strong>${prefix}</strong>${suffix}`
                }else if(words.includes(suffix)){
                    output = `${prefix}<strong>${suffix}</strong>`
                }
            }
            return output;
        }
    });
    return newStrWords.join(" ")

}
let str = "Ultimate Javascript / Frontend Guide";
let words = ["Frontend", "Java", "script"]

console.log(highlight(str,words))