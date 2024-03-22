// your code goes here

// request interceptor
// perform all the pre-request actions
window.requestInterceptor = (args) => {
    // original request does not contains page info
    // assign the pagination in the interceptor
    args[0] = args[0] + "2";
    return args;
  }
  
  // response interceptor
  // perform all the post-response actions
  window.responseInterceptor = (response) => {
    // convert the value to json 
    // to avoid parsing every time
    return response.json();
  }
  let oldFetch = window.fetch;
  window.fetch = async function(...args){
    url = window.requestInterceptor(args);
    let response = await oldFetch(args)
    response = responseInterceptor(response)
    return response;
  }
  
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(json => console.log(json));
  
  // Output:
  // {
  //   "userId": 1,
  //   "id": 2,
  //   "title": "quis ut nam facilis et officia qui",
  //   "completed": false
  // }