let cl = console.log;

let nums = [-5, -4, -3, -1, 0, 2, 5, 11, 8, 9]; // >> 0

// linear search
function sumZeroTwo(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

cl(sumZeroTwo(nums));

// // binary search

// cl(nums.findIndex((num) => {
//     // debugger
//     return num === 5
// }))
// -5,-4,-3,-1,1,2,5,8,9,11
// start > 0
// end > arr.length - 1 >> 9
// -5 + 11 >> 6 ( is add === 0) (is add > 0)
// end = 8 is index >> 9
// -5 + 9 >> 4 (is add === 0)  (add > 0)
// end === 7
// -5 + 8 >> 3 (is add === 0) (add > 0)
// end === 6 
// -5 + 5 >> 0(is add === 0) // strat ,end >> [-5, 5]

function newSumZero2(arr){
    let startIndex = 0;
    let lastIndex = arr.length - 1;
    let add;
    while(startIndex < lastIndex){
        add = arr[startIndex] + arr[lastIndex] ;
        if(add === 0){
            return ([ arr[startIndex], arr[lastIndex]])
        }else if(add > 0){
            lastIndex--;
        }else{
            startIndex++;
        }
    }
}

cl(newSumZero2(nums))