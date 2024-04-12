function Task(depsList,job){
      this.isCompleted = false;
      this.subscribers = [];

      if(depsList){
        depsList.forEach((dep)=>{
            dep.subscribe(this);
        })
      }
      

      this.subscribe = function(obj){
        this.subscribers.push(obj);
      }

      this.processJob = function (){
        if(depsList && depsList.length){
            let completed  = depsList.filter((dep)=>{
                return (dep instanceof Task ? dep.isCompleted : true );
            })
            if(completed.length === depsList.length){
                job.call(this,this.done.bind(this));
            }
        }else{
            job.call(this, this.done.bind(this));
        }
      }
      this.done = function(){
        this.isCompleted = true;
        this.subscribers.forEach(element => {
            element.processJob();
        });
      }
      this.processJob();
}


const processA = new Task(null, (done) => {
    setTimeout(() => {
        console.log('Process A');
        done();
}, 100); });
const processB = new Task([processA], (done) => {
    setTimeout(() => {
        console.log('Process B');
        done();
    }, 1500);
});
const processC = new Task(null, (done) => {
    setTimeout(() => {
        console.log('Process C');
        done();
    }, 1000);
});
const processD = new Task([processA, processB], (done) => {
    setTimeout(() => {
        console.log('Process D');
        done();
    }, 1000);
});
const processE = new Task([processC, processD], (done) => {
    setTimeout(() => {
        console.log('Process E');
        done();
    }, 100);
});
const createAllDoneInstance = (allDoneCallback) => new Task([processA,
processB, processC, processD, processE], allDoneCallback);
createAllDoneInstance((done) => {
    console.log('All is done!');
    done();
});