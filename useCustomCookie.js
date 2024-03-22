const useCustomCookie = () => {
    // ... your code goes here
    
    Object.defineProperty(document,'myCookie',{
        get(){
            let result = "";
            let cookies = Object.keys(document.cookies || {});
            console.log(document.cookies)
            for(ele of cookies){
                if(document.cookies[ele].maxAge > Date.now()){
                    let temp =  `${ele}=${document.cookies[ele].val}`;
                    if(result){
                        result = result + "; " + temp
                    }else{
                        result =  temp;
                    }
                }else{
                    delete document.cookies[ele]
                }
            }
            return result;
        },
        set(str){
            let cookie = str.split(";")
                let cookieName = cookie[0].split('=')[0];
                let cookieValue = cookie[0].split('=')[1];
                let maxAge = Number.MAX_SAFE_INTEGER;
                if(cookie[1]){
                    maxAge = cookie[1].split("=")[1]
                }
            if(document.cookies){
                document.cookies[cookieName] = {val:cookieValue,maxAge:Date.now() + maxAge*1000}
            }else{
                document.cookies = {}
                document.cookies[cookieName] = {val:cookieValue,maxAge:Date.now() + maxAge*1000}
            }
        }
    })
  }
  
  useCustomCookie();
  document.myCookie = "blog=learnersbucket";
  
  // this will expire after 1 second
  document.myCookie = "name=prashant;max-age=1"; 
  
  console.log(document.myCookie);
  
  setTimeout(() => {
    console.log(document.myCookie);
  }, 1500);
  setTimeout(()=>{
    console.log(document.myCookie);

  },2000)
  
  // Output:
  // "blog=learnersbucket; name=prashant"
  // "blog=learnersbucket"