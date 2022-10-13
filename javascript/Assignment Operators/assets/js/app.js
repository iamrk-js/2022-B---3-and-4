var cl = console.log;
var x = 10; // assignment Opr
//  x = x + 5; // 15
x += 5; // 15
cl(x);
// x  = x - 5; // 10
x -= 5; // 10
cl(x);
// x = x * 5; // 50
x *= 5; // 50
cl(x);
// x = x / 5; // 10
x /= 5;
cl(x);
x = 21;
y = 5;
cl(x / y); // 2.4
cl(x % y); // 1
// equality opr
var x = 10;
var y = 10;
var z = "10";
var p = 20;
cl(x == y); // true
cl(x == z); // true
cl(x === z); // false
cl(x === p); // false
// what is diff between equal to and strictly equal to
// equal to checks value only and strictly equal to checks value and datatypes both
var x = 10;
var y = 10;
var z = "10";
var p = 20;
cl(x > p); // false
cl(x < p); // true
cl(x <= p); // true
cl(x <= y); // true
cl(x <= z); // true
cl(x >= p); //false
cl(x >= y); // true
cl(x != y); //false
cl(x != p); // true
cl(x !== p); // true
cl(x != z); // false
cl(x !== z); // true
// logical opr >> and (&&) , or (||)
var x = 10;
var y = 10;
var z = "10";
var p = 20;
cl(x >= y && x == z); // true
cl(x > p && x == z); // false
cl(x === y && x >= z); // true
cl(z >= p && z >= x) // // false
cl(x === y && z >= x && z !== x) // true
// true && true >> true 
// true && false >> false 
// false && true >> false
// false && false >> false
var x = 10;
var y = 10;
var z = "10";
var p = 20;
cl(x != y || x == z); // true
cl(x != y || x == z); // true
cl(x != y || x === z); // flase
cl(x === y || z >= x || z !== x) // true
cl(x !== y || z > x || z === x) // false
// true || false >> true
// false || true >> true
// true || true >> true
// false || false >> false
var x = 10;
var y = 10;
var z = "10";
var p = 20;
let r1 = (x === z || p > z) && (x === y || x >= y)
//       (true) && (true) >. true
cl(r1)
cl(x <= z)