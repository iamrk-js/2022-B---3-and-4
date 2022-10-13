let cl = console.log;

let z = 10;
function add(x, y) {
  return x + y + z;
}
// cl(add(20,30));

// lexical scope >> scope of the parent function
// function main(p,q) {
//   // var p, q = undefined
//   let skills = ["Angular", "Typescript", "Rx.js", "Moment.js"];

//   function inner() {
//     cl(skills, z, p ,q);
//   }

//   inner();
// }

// // cl(skills);

// main(100,200);

// let x = 10;

function parentFunction() {
  let x = 10;
  function innerFunction() {
    x++;
    return x;
  }
  return innerFunction;
}

// x = 100;

// a function with its lexical scope is called as closure

// when we called return innerFunction in outerFunction
// innerFunction lexical scope
// and innerFunction bring out all the data/info in lexical scope
// outside outerFunction

let fun1 = parentFunction(); // it returns inner function defination >> x = 10 >> x == 11

cl(fun1()); // 11
cl(fun1()); // 12
cl(fun1()); // 13
cl(fun1()); // 14

// let val1 = fun1(); // x++ >> return x; // x == 11

// cl(val1) // 11

// let val2 = fun1(); // x++ >> x = 12

// cl(val2);

// cl(x)

let fun2 = parentFunction(); // return innerFunction() >> Object >> x = 10

let val3 = fun2(); // x = 10 >> x++ >> x == 11

cl("val3", val3);

let val4 = fun2();
cl("val4", val4);

// function CreateStudent(fn,ln){
//   // this = {}
//   this.fn = fn;
//   this.ln = ln;
//   // return this
// }

// let std1 = new CreateStudent('Jhon', "doe") // {fn:'jhon', ln :'Doe'}
// let std2 = new CreateStudent('July', "doe") // {fn:'July', ln :'Doe'}

function demo() {
  return "hello";
}

cl(demo);

// function

function incremantY() {
  let y = 4;
  return y++;
}

cl(incremantY()); // 4 >> 4 + 1
// y = 101;
cl(incremantY()); // 4 >> 4 + 1

function add(a) {
  // let a = 10
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}
let add1 = add(10);
cl(add1); // function(b){} // a = 10

let add2 = add1(20); // function(c)

cl(add2); // a = 10 and b = 20

let add3 = add2(30); // function(d)
cl(add3); // a = 10 b = 20 c = 30

let add4 = add3(40); //  a + b + c + d;

cl(add4); // 10 + 20 + 30 + 40

// function add(a) {
//   // let a = 10
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }

// let addition = (a) => {
//     return (b) => {
//       return (c) => {
//         return (d) => {
//           return a + b + c + d
//         }
//       }
//     }
// }

let addition = (a) => (b) => (c) => (d) => a + b + c + d;
// the function which accepts one argument at a time
// it returns new function expecting new argument

cl(addition(100)(200)(300)(400)); // function curring
