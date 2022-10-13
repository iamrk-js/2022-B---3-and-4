let cl = console.log;

// function add(x,y){
//   // x , y = undefined 
//   return x + y
// }

function add(x,y){
  // x , y = undefined 
  if(y){
    return x + y
  }else{
    y = 10;
    return x + y;
  }
}

let add1 = add(10,20);

cl(add1);


let add2 = add(10); // NaN
cl(add2);

function newAdd(x, y = 10){
  // var x; var y = 10
  return x + y
}

cl(newAdd(10,100)) // // x = 10; y = 100
cl(newAdd(200))


// function calculateBill(total, tax, tip){
//   if(!tax){
//     tax = .14
//   }
//   if(!tip){
//     tip = .1
//   }
//   return total + (total * tax) + (total * tip)
// }


function calculateBill(total, tax = .14, tip = .1){
  return total + (total * tax) + (total * tip)
}

cl(calculateBill(50000, .14, .1));
cl(calculateBill(50000));