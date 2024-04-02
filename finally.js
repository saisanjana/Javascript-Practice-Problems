// Promise.prototype.finally = function(callback){
//     if(typeof  callback !== 'function'){
//         return this.then(callback,callback);
//     }
//         return this.then(
//             (val)=>Promise.resolve(callback()).then(()=>val),
//             (err)=>Promise.resolve(callback()).then(()=>{throw err})
//         )
    
// }
Promise.prototype.finally = function(callback) {
    if (typeof callback !== 'function') {
      return this.then(callback, callback);
    }
    // get the current promise or a new one
    const P = this.constructor || Promise;
    // return the promise and call the callback function
    // as soon as the promise is rejected or resolved with its value
    return this.then(
      value => P.resolve(callback()).then(() => value),
      err => P.resolve(callback()).then(() => { return err; })
    );
  };
function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject('Failed to arrive');
      }
  }); 
}
  checkMail()
    .then((mail) => {
      console.log(mail);
    })
    .catch((err) => {
      console.error(err);
  }).finally(() => {
    console.log('Experiment completed');
});
const logger = (label, start = Date.now()) => (...values) => {
    console.log(label, ...values, `after ${Date.now() - start}ms`);
  };
  const delay = (value, ms) => new Promise(resolve => {
    setTimeout(resolve, ms, value);
  });
  function test (impl) {
    const log = ordinal => state => logger(`${ordinal} ${impl} ${state}`);
    const first = log('first');
    // test propagation of resolved value
    delay(2, 1000)
      .finally(first('settled'))
      .then(first('fulfilled'), first('rejected'));
    const second = log('second');
    // test propagation of rejected value
    // delay(Promise.reject(3), 2000).catch((err)=>{console.log(err)})
    //   .finally(second('settled'))
    //   .then(second('fulfilled'), second('rejected'));
    const third = log('third');
    // test adoption of resolved promise
    delay(4, 3000)
      .finally(third('settled'))
      .finally(() => delay(6, 500))
      .then(third('fulfilled'), third('rejected'));
    const fourth = log('fourth');
    // test adoption of rejected promise
    delay(5, 4000)
      .finally(fourth('settled'))
      .finally(() => delay(Promise.reject(7), 500))
      .then(fourth('fulfilled'), fourth('rejected'));
    }
    test('polyfill');