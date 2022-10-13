let cl = console.log;

// length === 2
// length === 3

// [[10,20], [30,40], [50,60], [70,80], [90]]
// [[10,20,30], [40,50,60], [70,80,90]]

// let arr = ages.slice(0, 2);
// cl(arr)

// for(let i = 0; i < ages.length; i += 2){
//     // chunkedAges.push(ages[i]) // i == 0
//     // chunkedAges.push(ages[i + 1]) // i == 1
//     let arr = []
//     if( i + 1 != undefined){
//          arr = [ages[i], ages[i + 1]];
//     }else if(i + 1 == undefined){
//          arr = [ages[i]]
//     }

//     chunkedAges.push(arr)
// }
let ages = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// length = 2
// [[10,20],[30,40],[50,60],[70,80]]
// function chunkArray(mainArray, len) { //len = 2
//   let chunkedArr = [];  //[[10,20], [30,40]]
//   let i = 0; // index number
//   while (i < mainArray.length) {
//     let arr = mainArray.slice(i, i + len); // chunked array // i = 0, i + len = 2 // [10,20]
//     // sclice(2, 4)  >> [2 index,3 index] >> [30,40]
//     chunkedArr.push(arr);
//     i += len;  // 0 + 2  >> i = 2 >> i = 2+2 = 4
//   }
//   return chunkedArr;
// }

// cl(chunkArray(ages,1)) // 1
// cl(chunkArray(ages,2)) // 2
// cl(chunkArray(ages,3)) // 3
// cl(chunkArray(ages,4)) // 4

function chunkArray(arr, len) {
  let chunkedAges = []; // undefined.push() // length == 0
  // let len = 1;
  arr.forEach(function (ele) {
    // ele >> array element
    // In last we are storing last element of chunkedArray
    let last = chunkedAges[chunkedAges.length - 1]; // chunkedAges[9]
    //  if index is  -1 >> undefined
    // last.push(ele);
    if (!last || last.length == len) {
      chunkedAges.push([ele]);
    } else {
      last.push(ele);
    }
  });
  return chunkedAges;
}


cl(chunkArray(ages, 2))