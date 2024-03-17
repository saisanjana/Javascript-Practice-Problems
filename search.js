let sampleData = [
    {
        name: "abc",
        cusine: "Indian"
    },
    {
        name: "def",
        cusine: "Indian"
    },
    {
        name: "jkl",
        cusine: "Italian"
    }
]
let searchResults = []
let resultsSection = document.getElementById("results")

function searchRestaurant(searchValue){
    console.log("searching",searchValue)
    let res = sampleData.filter((data)=>{
        return data.name.includes(searchValue) || data.cusine.includes(searchValue)
    })
    searchResults = [...res]
    console.log(searchResults)
    let result = ""
    searchResults.forEach((res)=>{
        result = result + res.name + " " + res.cusine + "\n";
    })
    resultsSection.innerHTML = result

}

function makeDebounce(fn, delay){
    let timeoutInterval = null;
    return function(...args){
        if(timeoutInterval){
            clearInterval(timeoutInterval)
        }
        timeoutInterval = setTimeout(()=>{
            fn.call(Window,...args)
        }, delay)
    }
}

let debouncedSearch = makeDebounce(searchRestaurant, 1000)
let searchVal = document.getElementById("searchInp");
searchVal.onkeyup = function ShowData(){ 
    debouncedSearch(searchVal.value)
}