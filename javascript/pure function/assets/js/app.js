let cl = console.log;

// 1 It must return some thing

let z = 10;
function add1(x, y) {
  cl(x + y + z);
}

// function add2(x,y){
//     return x + y + z
// }

// 2 It should not depends on external dclr

function add2(x, y) {
  return x + y + z;
}

function add3(x, y) {
  return (x + y) * Math.random();
}

// 3 It must  return same value(output) for same arguments (input)


cl(add3(10,10));
cl(add3(10,10));
cl(add3(10,10));
cl(add3(10,10));

function add4(x,y){
    return x + y
}

cl(add4(20,20))
cl(add4(20,20))
cl(add4(20,20))
cl(add4(20,20))