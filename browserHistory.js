const BrowserHistory = function(){
    // ... your code goes here
    this.pages = []
    this.currIndex = -1;
    this.visit = (url) => {
        this.pages = this.pages.slice(0,this.currIndex+1)
        this.pages.push(url)
        this.currIndex++;
    }
    this.backward = () => {
        this.currIndex--;
    }
    this.forward = () => {
        this.currIndex++;
    }
    this.current = () => {
        if(this.currIndex > -1){
        return this.pages[this.currIndex]
        }
    }
  }
  
  const bh = new BrowserHistory();
  
  bh.visit('A');
  console.log(bh.current());
  
  bh.visit('B');
  console.log(bh.current());
  
  bh.visit('C');
  console.log(bh.current());
  
  bh.backward();
  console.log(bh.current());
  
  bh.visit('D');
  console.log(bh.current());
  
  bh.backward();
  console.log(bh.current());
  
  bh.forward();
  console.log(bh.current());
  
  // Output:
  // "A"
  // "B"
  // "C"
  // "B"
  // "D"
  // "B"
  // "D"