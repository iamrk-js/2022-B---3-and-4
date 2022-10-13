let cl = console.log;

// parent constructor for own prototype setup

function extend(child, parent){
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child
}

function Shape(){

}

Shape.prototype.duplicate = function(){
  cl('Duplicate From Shape')
}

function Circle(radius) {
  this.radius = radius;
 
}

extend(Circle, Shape);
Circle.prototype.draw = function(){
  cl(`Circle is Drawn with radius ${this.radius}`)
}
Circle.prototype.duplicate = function(){
  cl(`Circle Duplicated`);
  Shape.prototype.duplicate.call(this);
}
let c = new Circle(10);
cl(c)
c.duplicate()


function Square() {

}
extend(Square, Shape);

let s = new Square();
s.duplicate()

// Polymorphism >> Poly + morphism
// poly >> many
// morph >> Forms








