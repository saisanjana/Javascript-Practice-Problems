class PriorityQueue{
	constructor(){
		this.items =[]
	}
	enqueue(value,priority){
		let added = false;
		for(let i=0;i<this.items.length;i++){
			if(priority> this.items[i].priority){
				if(!added){
					this.items.splice(i,0,{value,priority})
					added = true;
				}
			}
			
		}
		if(!added){
				this.items.push({value,priority})
			}
			console.log(this.items)
	}
	dequeue(){
		this.items.shift();
	}
	print(){
		for(let i=0;i<this.items.length;i++){
			console.log(this.items[i].value + " " + this.items[i].priority)
		}
	}
}


let pQ = new PriorityQueue();
pQ.enqueue(1, 3);
pQ.enqueue(5, 2);
pQ.enqueue(6, 1);
pQ.enqueue(11, 1);
pQ.enqueue(13, 1);
pQ.enqueue(10, 3);
pQ.dequeue();
pQ.print();