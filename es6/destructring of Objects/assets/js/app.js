let cl = console.log;

let person = {
  fname: "Jhon",
  lname: "Doe",
  age: 33,
  email: "jhon@gmail.com",
};

// let fname = person.fname;
// let lname = person.lname;

// JS object Destructuring >> In which we assign properties/methods
// of object to declrations
let { email, lname, age: newAge, fname: firstName } = person;

cl(`Hello There I'm ${firstName}, and ${newAge} years old`);

let ravi = {
  first: "Ravikiran",
  last: "Niturkar",
  link: {
    social: {
      facebook: "https://facebook.com/ravi",
      twitter: "https://twitter.com/ravi",
    },
    web: {
      blogs: "https://medium.com/ravi",
      traning: "https://theultimatecoders.com",
    },
  },
};

// let traning = ravi.link.web.traning;
// let blogs = ravi.link.web.blogs;

let { traning: getTraning, blogs: getBlogs } = ravi.link.web;

cl(getTraning, getBlogs);

let cssSettings = {
  width: 300,
  color: "skyblue",
};

let { width: w = 500, fontSize: fs = "26px",color: c,height: h = 500,} = cssSettings;

cl(w, h, fs, c);

cl(cssSettings)