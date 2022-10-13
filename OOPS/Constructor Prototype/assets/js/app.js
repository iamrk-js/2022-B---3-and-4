let cl = console.log;

function Circle (radius){
    this.radius = radius
}

cl(typeof Circle)
cl(Circle.name)
cl(Circle.length) //length represents no of parameters


let circleBase = Object.getPrototypeOf(Circle);

cl(circleBase);
cl(Object.getPrototypeOf(circleBase))



function Square(side){
    this.side = side;
}

let squareBase = Object.getPrototypeOf(Square);

cl(squareBase)
cl(Object.getPrototypeOf(squareBase))