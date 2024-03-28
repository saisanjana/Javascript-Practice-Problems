// your code goes here....



Array.prototype.listeners  = {};
Array.prototype.addListener = function(eventName,event) {
    if(this.listeners[eventName]) {
        this.listeners[eventName] = [...this.listeners[eventName],event]
    }else{
        this.listeners[eventName] = [event]
    }

}
Array.prototype.removeListener = function(eventName,event){
    let events = this.listeners[eventName]
    let ind = events.indexOf(event);
    if(ind>-1){
        this.listeners[eventName] = events.splice(ind,1)
    }
}
Array.prototype.pushWithEvent = function(eventName, data) {
    this.push(...data);
    this.listeners[eventName].forEach(element => {
        element(eventName,data,this);
    });
}
Array.prototype.popWithEvent = function(eventName) {
    let ele = this.pop();
    this.listeners[eventName].forEach(element => {
        element(eventName,ele,this);
    });
}

const onAdd = (eventName, items, array) => {
  console.log('items were added', items);
}

const onAddAgain = (eventName, items, array) => {
  console.log('items were added again', items);
}
const arr = [];
arr.addListener('add', onAdd);

arr.addListener('add', onAddAgain);

arr.addListener('remove', (eventName, item, array) => {
  console.log(item, ' was removed');
});

arr.pushWithEvent('add', [1, 2, 3, 'a', 'b']);

arr.removeListener('add', onAddAgain); // removes the second listener

arr.pushWithEvent('add', [4, 5]);
arr.popWithEvent('remove');

console.log(arr);

// Output:
// "items were added" // [object Array] (5)
// [1,2,3,"a","b"]

// "items were added again" // [object Array] (5)
// [1,2,3,"a","b"]

// "items were added" // [object Array] (2)
// [4,5]

// 5 " was removed"

// // [object Array] (6)
// [1,2,3,"a","b",4]