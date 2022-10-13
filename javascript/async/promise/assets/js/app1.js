let cl = console.log;

// function sumTwoNums(n1,n2, cb){
//     let sum;
//     setTimeout(() => {
//      sum = n1 + n2;
//      cb(sum);
//     }, 1000);
// }
// function logSum(val){
//     cl(`The summed value is ${val}`)
// }
// let sum1 = sumTwoNums(20,30, logSum);

// logSum(sum1); // sum1 >> undefind

// axois()
// jQuery()

function sumTwoNum(n1, n2) {
  let promise = new Promise((resolve, reject) => {
    cl('Promise in sumTwoNums')
    setTimeout(() => {
      let sum = n1 + n2;
      let error = Math.random() >= 0.5 ? false : true;
      if (error) {
        reject(`Something went Wrong !!!`);
      } else {
        resolve(sum);
      }
    }, 1000);
  });
  return promise;
}

function squareUp(num) {
  return new Promise((resolve, reject) => {
    let error = Math.random() >= 0.5 ? false : true;
    setTimeout(() => {
      if (error) {
        reject("Does't get Number for SquareUp");
      } else {
        resolve(Math.pow(num, 2));
      }
    }, 500);
  });
}

function logValue(val) {
  cl(`The summed value is ${val}`);
}

// sumTwoNum(10, 20)
//   .then((res) => squareUp(res))
//   .then((res) => cl(res))
//   .catch((err) => cl(err));

// the process of excecuting sequence of Asyn task one after one
// with the help of Promise is called Promise Chaining

async function init() {
  try {
    let sum = await sumTwoNum(1000, 2000);
    let sqrNum = await squareUp(sum);
    logValue(sqrNum);
  } catch (err) {
    cl(err)
  }
}

init();
