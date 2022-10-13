let cl = console.log;

// Class >> in es6 it is just syntitical sugar coating
// over js's existing prototype based inheritnace(i.e. constructor functions)

// let p2 = new Person('Jen', 'Doe', 25)
// cl(p2)

//In case of Class Hoisting is possible, but we can not access before  before initialization
class Person {
  constructor(fn, ln, age) {
    this.fname = fn;
    this.lname = ln;
    this.age = age;
  }
  greeting() {
    cl(`Hello There How  r u? I'm ${this.fname} ${this.lname}`);
  }
}
// when we write new ClassNAme() >> behind the constructor of ClassNAme will be called
let p = new Person("Jhon", "Doe", 33);
cl(p);

class Empl extends Person {
  constructor(fn, ln, age, role) {
    super(fn, ln, age);
    this.role = role;
  }
  testGreeting() {
    cl(`Hello There I'm ${this.fname} ${this.lname} from  Empl Class`);
  }
}

let emp1 = new Empl("Jen", "Doe", 25, "Dev");

cl(emp1);

emp1.greeting();
emp1.testGreeting();
// Static Methods and static Properties

// The method or property which is call on Class name directly
// for these methods we don't need instances tocall >> Static Methods/Propeties
class Customer extends Person {
  constructor({ fn = "customer", ln, age = 30, contactMethod }) {
    super(fn, ln, age); // by using super we are calling constructor of Parent class (in this case Parent is Person)
    this.contactMethod = contactMethod;
    this.accountCredit = null;
  }
  addAmount(amount) {
    if (!isNaN(amount)) {
      this.accountCredit += amount;
    }
  }
  reduceAmount(amount) {
    if (!isNaN(amount)) {
      this.accountCredit -= amount;
    }
  }

  static sayCustomername(...c){
          cl(c[0])
  }

}

let c1 = new Customer({ ln: "Doe", contactMethod: "email" });

cl(c1);

c1.addAmount(5000);
cl(c1.accountCredit)
c1.reduceAmount(3000);
cl(c1.accountCredit)
// isNan >> It returns true/false
// number is passed in isNaN >> fasle
//any value apart from number is passed in isNaN >> true

let c2 = new Customer({fn: 'Jhon', ln : 'Doe', age :  35, contactMethod : 'Email'});

cl(c2);

Customer.sayCustomername(c1)


// Math.PI >> Static Por 
//  Math.SQRT1_2 >> Static Pro 
// MAth.random() >> Static Method
// Array.from(HTMLCOllection)

// let arr = [] >> arr.push()