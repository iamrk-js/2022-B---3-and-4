let cl = console.log;

// spread opr
// itrable >> Array, object, string, HTMLcollection, Nodelist

let skills = ["HTML", "CSS", "javaScript"];

cl(skills);
cl(...skills);

let featured = ["Deep Dish", "Paperoni"];
let speciality = ["Meataz", "Indian Tandoor", "Mergarita"];

let allPizza = [...featured, "Indian Masala", ...speciality];

cl(allPizza);

// ["Jhon", "Jhony", "Janardhan"]
// nodelist to array
// Array > p >> innerText >> []
// let people = Array.from(document.querySelectorAll('#people > p'));
let people = [...document.querySelectorAll("#people > p")].map(
  (ele) => ele.textContent
);

cl(people);
// let p = people.map((ele) => ele.textContent);
// cl(p);

let c1 = {
  radius: 10,
  computeOptimumLocation: { x: 0, y: 0 },
};
let c2 = {
  ...c1,
  color: "orange",
  draw() {
    cl("Circle is drawn !!!");
  },
};
// let c3 = {
//     ...c1,
//     ...c2
// }
// cl(c3);

// c3.draw();

c1.radius = 100;

cl(c1);
cl(c2);

let p1 = {
  fname: "Jhon",
  lname: "Doe",
  email: "jon@gmail.com",
  child: {
    fname: "jen",
    lname: "Doe",
    email: "j@gmail.com",
  },
};

// let p2 = {
//     ...p1,
//    age : 33
// };

// let p2 = Object.assign({age: 33}, p1)

let p2 = JSON.parse(JSON.stringify(p1));
p1.child.email = "jen@gmail.com";

cl(p1);
cl(p2); // j@gmail.com

let fn = {
  fname: "Jhon",
};

let ln = {
  lname: "Doe",
};

let fullName = {
  ...fn,
  ...ln,
};

cl(fullName);

let newAllPizza = [...allPizza];

cl(allPizza);
cl(newAllPizza);

allPizza.pop();

cl(allPizza);
cl(newAllPizza);

let links = {
  social: {
    twitter: "twitter.com",
    facebook: "facebook.com",
  },
  web: {
    blogs: "blogs.com",
    site: "tuc.com",
  },
};

// let links2 = {
//   ...links,
// };

let links2 = JSON.parse(JSON.stringify(links))

links.web.site = "theultimatecoders.com"
cl(links)
cl(links2)