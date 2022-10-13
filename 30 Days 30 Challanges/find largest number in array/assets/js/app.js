let cl = console.log;

// let arr = [123,456,111,789]

// let maxNum = 0;

// arr.forEach(num => {
//   if(num > maxNum){
//     maxNum = num;
//   }
// })

// cl(maxNum);

// cl(Math.max(...arr))

let arr = [
  [123, 456, 789],
  [600, 888, 999],
  [456, 753, 159],
  [789, 698, 852],
];

// function findMaxNum(arr){
//   return Math.max(...arr.flat(Infinity))
// }

// cl(findMaxNum(arr))

let maxNum = 0;

for (let i = 0; i < arr.length; i++) {
  // cl(arr[i])
  for (let j = 0; j < arr[i].length; j++) {
    // cl(arr[i][j]);
    if (arr[i][j] > maxNum) {
      maxNum = arr[i][j];
    }
  }
}

cl(maxNum);

// Return largest Numbers array from given array
// [789,999,753,852]
arr = [
  [123, 456, 789],
  [600, 888, 999],
  [456, 753, 159],
  [789, 123, 100],
];

// let largetArray = [];

// arr.forEach(ele => {
//   // cl(ele)
//   let maxNum = 0
//   ele.forEach(num => {
//     if(num > maxNum) {
//       maxNum = num
//     }
//   })
//   largetArray.push(maxNum)
// })

// cl(largetArray)

// let newArr = arr.filter(ele => Math.max(...ele))

// cl(newArr)
arr = [
  [123, 456, 789],
  [600, 888, 999],
  [456, 753, 159],
  [789, 698, 852],
];

// arr.forEach(ele => {
//   // cl(ele)
//   // cl(Math.max(...ele)) // 123,456,789
//   largetArray.push(Math.max(...ele))
// })

// let largetArray = arr.map(ele =>  Math.max(...ele))

// cl(largetArray)

// cl(Math.max( ...[123,456,789])) // 789 latgestArray.push(789)
// cl(Math.max(...[600,888,999])) // 999 latgestArray.push(999)
function findMaxNumArr(arr) {
  return arr.map((ele) => Math.max(...ele));
}
console.time();
cl(findMaxNumArr(arr));
console.timeEnd();

// let result = arr.map(ele => {
//  return ele.reduce((prev, current) => {
//       return current > prev ? current : prev
//   })
// })
arr = [
  [789, 123, 100],
  [123, 456, 789],
  [600, 888, 999],
  [456, 753, 159],
];

let d1 = Date.now();
console.time();
// cl(d1)
let result = arr.map((ele) => {
  return ele.reduce((prev, current) => {
    if (current > prev) {
      return current;
    } else {
      return prev;
    }
  });
});
console.timeEnd()
// let d2 = Date.now();
// cl(d2)

// cl(d2 - d1)
cl(result);
