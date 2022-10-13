let cl = console.log;

// parent constructor for own prototype setup

function Shape(){

}

Shape.prototype.duplicate = function(){
  cl('Duplicate')
}

function Circle(radius) {
  this.radius = radius;
}
// Circle Con >> CircleBase >> ObjectBase;
// Circle.prototype = Object.create(Object);
// Circle Con >> CircleBase(Circle.prototype) >> (Object >> ShapeBase) >> ObjectBase;
Circle.prototype  = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
  cl(`Circle is Drawn with radius ${this.radius}`)
}
//
// Circle.prototype.duplicate = function(){
//   cl('Duplicate')
// }

let c = new Circle(10);
cl(c)
// c.duplicate()
function Square(side){
  this.side = side;
}

// Square.prototype.duplicate = function(){
//   cl('Duplicate')
// }

let s = new Square(100)
cl(s)


