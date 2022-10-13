let cl = console.log;

let numbers = [1,2,3,4,1,2,4,5,6,7,8,9,8,5,6,9] ;

// let newNumbers = [];

// cl(newNumbers.includes(1))

// cl(numbers.indexOf(100)) // -1

// function uniqueNumArray(arr){
//   let newArray = [];

//   arr.forEach(ele => {
//     if(!newArray.includes(ele)){
//       newArray.push(ele)
//     }
//   });

//   return newArray
// }

// function uniqueNumArray(arr){
//   let newArray = [];
//   arr.forEach(ele => {
//     if(newArray.indexOf(ele) === -1){
//       newArray.push(ele)
//     }
//   });
//   return newArray
// }

// cl(uniqueNumArray(numbers));


// function uniqueNumArray(arr){
//   let newArray = arr.filter((num, i) => {
//     return arr.indexOf(num) === i
//   })
//   return newArray
// }

// function uniqueNumArray(arr){
//  return arr.filter((num, i) =>  arr.indexOf(num) === i)
// }


// cl(uniqueNumArray(numbers));

// 

function uniqueNumArray(arr) {
  let newArry = arr.reduce((a, c) => {
    if(!a.includes(c)){
      a.push(c)
    }
    return a;
  }, [])
  return newArry;
}

cl(uniqueNumArray(numbers))


// new Set


function uniqueNumArray1(arr) {
  return [...new Set(arr)]
}


cl(uniqueNumArray1(numbers))
