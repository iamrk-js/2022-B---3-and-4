let cl = console.log;

// Property Descriptor >> toString

// writable : true
// enumerable: false
// configurable: true
let person = {
    fname : 'Jhon',
    lname : 'Doe',
    fullName : function(){
        return `${this.fname} ${this.lname}`
    }
}

cl(person.toString());

// delete person.fname;
// cl(person);

for(let k in person){
    cl(k);
}

// to get prototype of any object
let objectBase = Object.getPrototypeOf(person);

cl(objectBase);
// delete objectBase.toString;

// cl(objectBase)
// to see the Property Descriptor attributes 
// we have 3 Property Descriptor attributes >> Writable, configrable, enumarable
// Writable >> It desides wethere to alow change the value of key or not
// configrable >> It desides wethere to delete/remove the value of key and value
// enumarable >>  >> It desides wethere to alow in loop or not


let getDescr =  Object.getOwnPropertyDescriptor(objectBase,"toString");

cl(getDescr);

Object.defineProperty(person, 'fname',{
    writable : false,
    configurable : false,
    enumerable : false
})


cl(person);

person.fname = "jen";
cl(person);

delete person.fname;
cl(person)

for(let k in person){
    cl(k)
}

cl(Object.keys(person))


let fn = Object.getOwnPropertyDescriptor(person, 'fname');
cl(fn)