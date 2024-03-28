// function reqListener () {
//     if (this.status==200)
//   {
//         if(this.responseText !== '0') {
//             console.log( this.responseText)
//             let ele = document.getElementById("results")
//             ele.innerHTML = this.responseText
//         //    location="http://website.com/file.php?data=test&more=example";
//         }
//   }
//     else
//         throw new Error(this.statusText);
  
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "https://c.clicktale.net/pageview?ex=&pvt=a&la=en-IN&uc=0&url=https%3A%2F%2Fwww.atlassian.com%2Fcompany%2Fcareers%2Fall-jobs%3Fteam%3D%26location%3DIndia%26search%3Dfrontend&dr=&dw=894&dh=2336&ww=894&wh=738&sw=1512&sh=982&uu=7ecc5f20-2c0c-a137-e27b-76a45b3883d1&sn=3&hd=1710607043&v=13.99.9&pid=3767&pn=11&r=405233");
//   oReq.send();
var arr =[]
function test(){
  return arr.concat(6)
}
console.log(test())
console.log(arr)
