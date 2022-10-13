let cl = console.log;

// Abstraction 
// Hide Details and show Essentiails
function Circle(radius) {
    // this = {}
    this.radius = radius;
    let defaultLocation = {x:0, y:0}; 
    this.computeOptimumLocation = function(){
        // ....  return this.defaultLocation
    }
    this.draw = function() {
        // this.defaultLocation
        cl(`Circle is drawn with Radius ${radius}`)
    }
    // return this
}
// rad >> center 
let c1 = new Circle(10);
cl(c1)
cl(c1.defaultLocation) // error
c1.defaultLocation = "Hello"; // defaultLocation is added in c1 instance

cl(c1) // 

c1.draw()

let c2 = new Circle(20);

cl(c2);


let person = {
    fn : 'Jhon',
    ln : 'Doe'
}

cl(person)

person.age = 33;
cl(person)
