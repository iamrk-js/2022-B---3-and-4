let cl = console.log;

let lifeLine = "javascript";

// javascript, 3 >> jav...
// javascript , 5 >> javas...
// 10 > 3
// 1 > 3
// function truncateString(str, num){
//   if(str.length > num ){
//     return str.slice(0,num) + `...`
//   }else{
//     return str
//   }
// }

// function truncateString(str, num){
//   return str.length > num ? (str.slice(0, num) + `...`) : str
// }
const truncateString = (str,num) => str.length > num ? (str.slice(0, num) + `...`) : str;
cl(truncateString(lifeLine, 3))
cl(truncateString(lifeLine, 30))
cl(truncateString(lifeLine, 2))
