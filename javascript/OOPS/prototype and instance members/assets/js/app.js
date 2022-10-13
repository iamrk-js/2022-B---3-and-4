let cl = console.log;

function Circle(radius) {
  this.radius = radius;
  this.move = function(){
    cl(`Circle center is moved`)
  }
}
Circle.prototype.draw = function () {
  cl(`Cricle is drawn with Radius ${this.radius}`);
};
Circle.prototype.toString = function(){
    cl(`Cricle is drawn with Radius ${this.radius} and using CircleBase Prototype`);
}

// If we create instance from Circle Constructor
// we will have 4 properties/methods on that instance
// radius, move >> instance members and draw, toString >> prototype members
let c1 = new Circle(10);
let c2 = new Circle(20);
// Instances created by same constructor function have same prototype
// Prototype of instance created by contructor function is same as 
// prototype of constructor function
cl(c1.__proto__ === c2.__proto__);
cl(c2);

c2.draw();

let str1 = new String("Hello String Method");

cl(str1);

String.prototype.reverseString = function(str){
    if ( ! str ) { str = this; }
    cl('String is reversed');
    if(str){
    return str.split('').reverse().join('')
    }
}
cl(str1.reverseString())
// Array, Math, Date, String, Number Promise
// Object.keys method will return Instance members only
cl(Object.keys(c2))

// for in will return instance as well as prototype members
for(let k in c2){
    cl(k)
}