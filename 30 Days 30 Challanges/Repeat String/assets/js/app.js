let cl = console.log;

let str = `I love javaScript`;

// 3 `I love javaScriptI love javaScriptI love javaScript`

// function repeatString(givenStr, num){
//   if(num <= 0){
//       return `Enter proper values`
//   }
//   let result = ``;
//   for (let i = 0; i < num; i++) {
//       // cl(givenStr)
//       result += givenStr;
//   }
//   return result;
// }

function repeatString(givenStr, num) {
  let result = ``;
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      // cl(givenStr)
      result += givenStr;
    }
  }
  return result;
}

// cl(repeatString(str, -2));
// cl(repeatString(str, 2));

// function repeatString2(givenStr, n){
//   if(n > 0) {
//     return givenStr.repeat(n)
//   }else{
//     return ''
//   }
// }

function repeatString2(givenStr, n) {
  return n > 0 ? givenStr.repeat(n) : "";
}

cl(repeatString2(str, 2));

// baseCase  n === 1

function recursionRepeatStr(givenStr, n) {
  if (n <= 0) {
    return "";
  }
  if (n === 1) {
    return givenStr;
  } else {
    return givenStr + recursionRepeatStr(givenStr, n - 1);
  }
}

cl(recursionRepeatStr(str, 2))
cl(recursionRepeatStr(str, -2))
