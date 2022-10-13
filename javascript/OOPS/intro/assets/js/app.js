// OOP 

let cl = console.log;

let obj = new Object();
cl(obj)
let obj1 = {}
cl(obj1)

function person(fn, ln){
    return {
        fname : fn,
        lname : ln
    }
}

let obj2 = person("Jhon", "Doe");
cl(obj2);

function Person(fn, ln){
    this.fname = fn;
    this.lname = ln;
}

let obj4 = new Person('Jen', "Doe");

cl(obj4);

// class >> It blueprint for creating instance/object
// instance === object

// In javascript >> class >> Are the syntetical sugar coating over the constructor functions

class Circle {
    constructor(rad){
        this.rad = rad;
        this.location = {x:0, y:0};
        this.draw = function(){
            cl(`Circle is drawn with rad ${rad}`)
        }
    }
}
let c1 = new Circle(10);// when we call class
// >> cunstrunctor function of the class will be triggred

cl('c1', c1)

c1.draw() // 

let c2 = new Circle(100);

cl(c2);

c2.draw();


// Inheritance

// classical 
// Prototypical 
// Prototype >> parent Object
// prototype-base-object-orinted
// Object Base

// block Scope >> let and const
let person2 = {
    fn : 'Jhon',
    ln : 'Doe',
    fullName(){
        return `${this.fn} ${this.ln}`
    }
}
let x = {};

cl(x.toString());

let y = {};

let ages = [10,22,30,56,59];

cl(x.__proto__ === y.__proto__)