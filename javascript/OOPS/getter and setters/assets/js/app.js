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
    Object.defineProperty(this, 'defaultLocation', {
        get : function() {
            return defaultLocation;
        },
        set : function(val){
            if(val.x && val.y){
                defaultLocation = val
            }else {
                throw new Error(`Please enter proper co-ordinate values`)
            }
        }
    } )
}
// rad >> center 
let c1 = new Circle(10);
cl(c1)
cl(c1.defaultLocation) // error
// c1.defaultLocation = "Hello"; // defaultLocation is added in c1 instance

cl(c1) // 

c1.draw()

let c2 = new Circle(20);
cl(c2.radius);
cl(c2.defaultLocation);
// c2.defaultLocation = "Hello";
c2.defaultLocation = {x:50,y : 50};
cl(c2);


let person = {
    fn : 'Jhon',
    ln : 'Doe'
}

cl(person)

person.age = 33;
cl(person)






class Person {
    constructor(fn,ln){
        this.fname = fn;
        this.lname = ln;
    }

    greet(){
        return `Hello There I'm ${this.fname} ${this.lname}`
    }

    get getFullName(){
        return `${this.fname} ${this.lname}`
    }

    set setFullname (val) {
        if(Array.isArray(val) && val.length === 2){
            // this.fname = val[0];
            // this.lname = val[1];
            [this.fname, this.lname] = val;
        }else{
            throw new Error(`Please enter Names`)
        }
    }
}

let p1 = new Person('Jhon', 'Doe');

cl(p1)

cl(p1.getFullName)
p1.setFullname = ["Jen", "doe"];

cl(p1)