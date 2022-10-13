let cl = console.log;

let str1 = "I love javaScript";

function findLargestStrLength(str){
  let maxLength = 0;
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
      if(arr[i].length > maxLength ){
        maxLength = arr[i].length
      }
  }
  return maxLength;
}

cl(findLargestStrLength(str1));


function findLargestStr(str){
  let maxLength = 0;
  let largetStr = ''
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
      if(arr[i].length > maxLength ){
        maxLength = arr[i].length;
        largetStr = arr[i]
      }
  }
  return largetStr;
}
cl(findLargestStr(str1))

function findLongestWord(str){
  let longWord = str.split(' ');
  longWord.sort((a, b )=> {
     return b.length - a.length;
  }) 
  return longWord[0]
}

cl(findLongestWord(str1));


function findLongestWord1(str){
  let arr = str.split(' ')
  let maxLength = arr.reduce((x,y) => {
    return Math.max(x, y.length)
  }, 0)
  return maxLength;
}

cl(findLongestWord1(str1))

