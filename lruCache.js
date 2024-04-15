// use double linked list to store the lru queue
// use a map sto store item : node address

function Node(key,val){
	this.value = val;
	this.key = key;
	this.prev = null;
	this.next=null;
}

function LRU(cap){
	this.cap = cap;
	this.count = 0;
	this.cache = new Map();
	this.head = null;
	this.tail = null;
	// most recent = tail
	// old = head

	this.put = function(key,value){
		let node = new Node(key,value);
		this.cache.set(key,node);
		if(this.count === this.cap){
			
			if(this.head === this.tail){
				this.head = null;
				this.tail = null;
			}else{
				let temp = this.head;
				this.head = this.head.next;
				this.head.prev = null;
				this.cache.delete(temp.key);
			}

			if(!this.head){
				this.head = node;
				this.tail = node;
			}else{
				this.tail.next = node;
				node.prev = this.tail;
				this.tail = node;
			}

		}else{
			if(!this.head){
				this.head = node;
				this.tail = node;
			}else{
				this.tail.next = node;
				node.prev = this.tail;
				this.tail = node;
			}
			this.count++;
		}
	}

	this.use = function(key){
		if(!this.cache.get(key)){
			console.log("Can't find given key");
			return;
		}else{
			let node = this.cache.get(key);
			if(this.tail !== node){
				if(this.head === node){
					this.head = this.head.next;
					this.head.prev = null;
					this.tail.next = node;
					node.prev = this.tail;
					this.tail = node;
				}else{
					let tempPrev = node.prev;
					tempPrev.next = node.next;
					node.next.prev = tempPrev;
					this.tail.next = node;
					node.prev = this.tail;
					this.tail = node;
				}
			}
		}
	}



	this.display = function(){
		let temp = this.tail;
		while(temp){
			console.log(temp.key + " " + temp.value);
			temp = temp.prev
		}
	}

}

const lru = new LRU(4);
lru.put(1, 'a');
lru.put(2, 'b');
lru.put(3, 'c');
lru.put(4, 'd');
lru.put(5, 'e');
lru.display();
lru.use(2);
lru.display();
