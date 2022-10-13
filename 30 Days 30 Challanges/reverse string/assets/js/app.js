let cl = console.log;

let lifeLine = "I love javascript";

// cl(lifeLine.split("").reverse().join(""));

// // const reverseString = (str) => {
// //     let result = '';

// // }

// const reverseString = (str) => {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     //    cl(str.charAt(i))
//     // cl(str[i])
//     result += str[i];
//   }
//   return result;
// };


// cl(reverseString(lifeLine))

// revrese string but not words

// javascript love I

lifeLine = "I love javascript";

// let result = lifeLine.split(' ');

// result = result.reverse();
// result = result.join(' ');
// cl(result)

let result = '';
let innerStr = ''
for (let i = lifeLine.length - 1; i >=0; i--) {
      if(lifeLine.charAt(i) !== " "){
        innerStr = lifeLine[i] + innerStr;
        if(i === 0){
            result += innerStr;
        }
      }else{
        result += innerStr + ' ';
        innerStr = ''
      }
}

cl(result)


