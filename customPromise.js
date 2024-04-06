// original promise
// let original = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(true){
//             resolve("timer done")
//         }else{
//             reject("error in timer")
//         }
//     },5000)
// })

// console.log(original)
// original.then((val)=>{
//     console.log(val)
//     return val;
// }).then((val)=>{
//     console.log(val)
// })
 
// need a constructor function that accepts a callback with two callbacks as arguments.

function MyPromise(callback){
    this.state = "pending";
    this.subscribers = [];
    this.rejections = [];
    this.finallyCallbacks = [];
    this.resolve = function(value){
        this.state = "fullfilled"
        this.subscribers.forEach(element => {
            let thenVal = element.thenCallback(value);
            if(thenVal?.then){
                thenVal.then((value)=>{
                    element.resolve(value)
                }).catch((err)=>{
                    element.reject(err)
                })
            }else{
                element.resolve(thenVal)
            }
            
        });
        this.subscribers =[];
        this.finallyCallbacks.forEach(element => {
            try{
                let val = element.finallyCallback();
                element.resolve(val)
            }catch(err){
                element.reject(err)
            }
        });
        this.finallyCallbacks = []
    }
    this.reject = function(error){
        this.state = "rejeted"
        //perform all rejections
        this.rejections.forEach(element => {
            let thenVal = element.catchCallback(error);
            if(thenVal?.then){
                thenVal.then((value)=>{
                    element.resolve(value)
                }).catch((err)=>{
                    element.reject(err)
                })
            }else{
                element.resolve(thenVal);
            }
            
        });
        this.rejections = []
        this.finallyCallbacks.forEach(element => {
            try{
                let val = element.finallyCallback();
                element.resolve(val)
            }catch(err){
                element.reject(err)
            }
        });
        this.finallyCallbacks = []
    }
    this.performAction = function(){
        try{
            callback(this.resolve.bind(this),this.reject.bind(this));
        }catch(error){
            this.reject(error);
        }
    }
    this.then = function(thenCallback){
        return new MyPromise((resolve,reject)=>{
            this.subscribers.push({thenCallback,resolve,reject});
        })
    }
    this.catch = function(catchCallback){
        return new MyPromise((resolve, reject) => {
            this.rejections.push({catchCallback,resolve,reject})
        })
    }
    this.finally = function(finallyCallback){
        return new MyPromise((resolve, reject) => {
            this.rejections.push({finallyCallback,resolve,reject})
        })
    }
    this.performAction();

}

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate fetching data from an API after 2 seconds
        setTimeout(() => {
            const data = [
                { id: 1, name: 'Alice', age: 30 },
                { id: 2, name: 'Bob', age: 25 },
                { id: 3, name: 'Charlie', age: 35 },
                { id: 4, name: 'David', age: 40 },
                { id: 5, name: 'Eve', age: 28 }
            ];
            resolve(data);
        }, 2000);
    });
}

function transformAndFilterData(data) {
    return new Promise((resolve, reject) => {
        // Simulate transforming and filtering data after 1 second
        setTimeout(() => {
            const transformedData = data.map(item => ({
                id: item.id,
                name: item.name.toUpperCase(),
                ageGroup: item.age < 30 ? 'Young' : 'Senior'
            })).filter(item => item.ageGroup === 'Young');

            resolve(transformedData);
        }, 1000);
    });
}

// Using the promises
fetchDataFromAPI()
    .then(data => {
        console.log('Fetched Data:', data);
        return transformAndFilterData(data);
    })
    .then(transformedData => {
        console.log('Transformed and Filtered Data:', transformedData);
    })
    .catch(error => {
        console.error('Error:', error);
    })
    .finally(() => {
        console.log('Promise completed.');
    });


