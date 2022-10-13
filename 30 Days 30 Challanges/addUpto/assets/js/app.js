let cl = console.log;

// DSA

// BIG O

// n = 100;
let d  = new Date();
function addUpto(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}
// Date.now() >> it returns no of milisec form 1 jan 1970 to till date(currrent time)
let t1 = Date.now(); // start time
cl(addUpto(100000000));  // 3n
let t2 = Date.now(); // end time

let total = t2 - t1;
cl(total / 10000) // 2345678903456789

// time complexity >> faster 

function addUpto2(n){
  let ans = (n * (n + 1) / 2); // 3
  return ans
}

let t3 = Date.now(); // start time
cl(addUpto2(100000000));
let t4 = Date.now(); // end time
let newTotal = t4 - t3;

cl(newTotal / 10000)