let cl = console.log;

let ages = [15, 25, 16, 24, 28, 29, 36, 41, 48, 10, 12];

let doubleAges = [];
ages.forEach(function (age) {
  // cl(age);
  doubleAges.push(age * 2);
});
cl(ages);
cl(doubleAges);
// orignal array >>> comman func on each and every array member >> New Array
// map >> HOF
// map returns array

// let newDoubleAges = ages.map(function(age){
//     return age * 2
// })

// let newDoubleAges = ages.map((age) => {
//     return age * 2
// })

let newDoubleAges = ages.map((age) => age * 2);
cl("newDoubleAges", newDoubleAges);

//

let agesSqrt = [];

ages.forEach(function (age) {
  // let num = Math.sqrt(age)
  agesSqrt.push(Math.sqrt(age));
});

cl(agesSqrt);

// let newAgesSqrt = ages.map(function(age){
//         return Math.sqrt(age)
// })

// let newAgesSqrt = ages.map((age) => {
//     return Math.sqrt(age)
// })

let newAgesSqrt = ages.map((age) => Math.sqrt(age));
cl(newAgesSqrt);

let companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// [{companyName : '', category : ''}]

let companyInfo = [];

companies.forEach(function (comp) {
  // let obj = {
  //     companyName : comp.name,
  //     category : comp.category
  // }
  // cl(obj)
  companyInfo.push({
    companyName: comp.name,
    category: comp.category,
  });
});

console.table(companyInfo);

// let newCompanyInfo = companies.map(function (comp) {
//   return {
//     companyName: comp.name,
//     category: comp.category,
//   };
// });

let newCompanyInfo = companies.map((comp) => ({
  companyName: comp.name,
  category: comp.category,
}));

cl(newCompanyInfo);

// [{companyName : '', years : '1981 - 2003'} ]

let comp2 = [];

companies.forEach(function (comp) {
  let obj = {
    companyName: comp.name,
    years: `${comp.start} - ${comp.end}`,
    // years:  comp.start  + "-" +comp.end,
  };
  // cl(obj)
  comp2.push(obj);
});

cl(comp2);

// let comp3 = companies.map(function(comp) {
//     return {
//         companyName : comp.name,
//         years : `${comp.start} - ${comp.end}`
//     }
// })

// let comp3 = companies.map((comp) => {
//     return {
//         companyName : comp.name,
//         years : `${comp.start} - ${comp.end}`
//     }
// })
let comp3 = companies.map((comp) => ({
  companyName: comp.name,
  years: `${comp.start} - ${comp.end}`,
}));
cl(comp3);

// [companyName : '', duration : 10]

let compDuration = [];

companies.forEach(function (comp) {
  compDuration.push({
    companyName: comp.name,
    duration: comp.end - comp.start,
  });
});

cl(compDuration);

let compDuration2 = companies.map((comp) => {
  return {
    companyName: comp.name,
    duration: comp.end - comp.start,
  };
});

cl(compDuration2);

// cl(compDuration == compDuration)

companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
//  ["Company One", "Company Two", "Company Three"]

let compName = [];

companies.forEach((comp) => {
  compName.push(comp.name);
});

cl(compName);
let compName1 = companies.map((comp) => comp.name);
cl(compName1);

let compCat = [];

companies.forEach((comp) => {
  compCat.push(comp.category);
});
cl(compCat);

let compCat1 = companies.map((comp) => comp.category);

cl(compCat1);

// [ 25, 16 ,35]

let compAges = [];

companies.forEach((comp) => {
  compAges.push(comp.end - comp.start);
});

cl(compAges);

let compAges2 = companies.map((comp) => comp.end - comp.start);
cl(compAges2);

// filter >> It also returns a new Array
ages = [15, 25, 16, 24, 28, 29, 36, 41, 48, 10, 12];

// age >= 18

let canDrive = [];
let cantDrive = [];
// ages.forEach(function(age){
//     if(age >= 18){
//       canDrive.push(age)
//     }
// })

ages.forEach((age) => {
  if (age >= 18) {
    canDrive.push(age);
  }
});

cl(canDrive);

// let canDrive1 = ages.filter(function(age) {
//   // if (age >= 18) {
//   //   return true;
//   // }
//   return age >= 18 // true | false
// });

let canDrive1 = ages.filter((age) => age >= 18);
cl(canDrive1);

let canMarry = [];

ages.forEach((age) => {
  if (age >= 21) {
    canMarry.push(age);
  }
});

cl(canMarry);

let canMarry1 = ages.filter((age) => age >= 21);
cl(canMarry1);

companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "  ReTail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "RetaIl", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

let compRetail = [];

companies.forEach((comp) => {
  if (comp.category.toLowerCase().trim() === "retail") {
    compRetail.push(comp);
  }
});

cl(compRetail);

// let compRetail1 = companies.filter(comp => {
//   return comp.category.toLowerCase().trim() === 'retail'
// })
let compRetail1 = companies.filter(
  (comp) => comp.category.toLowerCase().trim() === "retail"
);

cl(compRetail1);

// 80s >> 1980 to 1989

let comp80s = [];

companies.forEach((comp) => {
  if (comp.start >= 1980 && comp.start <= 1989) {
    comp80s.push(comp);
  }
});

cl(comp80s);

// let comp80s1 = companies.filter(comp => {
//   return (comp.start >= 1980 && comp.start <= 1989)
// })
let comp80s1 = companies.filter(
  (comp) => comp.start >= 1980 && comp.start <= 1989
);
cl(comp80s1);

companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "  ReTail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "RetaIl", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// retail && 80's

let retail80s = [];

companies.forEach((comp) => {
  if (
    comp.category.toLowerCase().trim() === "retail" &&
    comp.start >= 1980 &&
    comp.start <= 1989
  ) {
    retail80s.push(comp);
  }
});
cl(retail80s);
// HOF are slower than for loop // babel

// let retail80s2 = companies.filter((comp) => {
//   return (
//     comp.category.toLowerCase().trim() === "retail" &&
//     comp.start >= 1980 &&
//     comp.start <= 1989
//   );
// });
let retail80s2 = companies.filter(
  (comp) =>
    comp.category.toLowerCase().trim().includes("retail") &&
    comp.start >= 1980 &&
    comp.start <= 1989
);
cl(retail80s2);

cl("i love JAVASCRIPT".toLowerCase().trim().includes("javascript")); // true

// finance >>at least for  10Years

let finance10Y = [];

companies.forEach((comp) => {
  if (
    comp.category.toLowerCase().trim().includes("finance") &&
    comp.end - comp.start >= 10
  ) {
    finance10Y.push(comp);
  }
});

cl(finance10Y);

let finance10Y2 = companies.filter((comp) => {
  return (
    comp.category.toLowerCase().trim().includes("finance") &&
    comp.end - comp.start >= 10
  );
});

cl(finance10Y2);

// 80s | Auto | at least for 10Years

let auto80s10s = [];

companies.forEach((comp) => {
  if (
    comp.start >= 1980 &&
    comp.start <= 1989 &&
    comp.category.toLowerCase().trim().includes("auto") &&
    comp.end - comp.start >= 10
  ) {
    auto80s10s.push(comp);
  }
});

cl(auto80s10s);

let auto80s10s2 = companies.filter((comp) => {
  return (
    comp.start >= 1980 &&
    comp.start <= 1989 &&
    comp.category.toLowerCase().trim().includes("auto") &&
    comp.end - comp.start >= 10
  );
});

cl(auto80s10s2);

// start >> 80s
// 80, 81, 82, 83, 84 , 85, 86 ,87 , 88, 89

companies = [
  { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
  {
    name: "Company Two",
    id: "2",
    category: "  ReTail",
    start: 1992,
    end: 2008,
  },
  { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", id: "4", category: "RetaIl", start: 1989, end: 2010 },
  {
    name: "Company Five",
    id: "5",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
  {
    name: "Company Eight",
    id: "8",
    category: "Technology",
    start: 2011,
    end: 2016,
  },
  { name: "Company Nine", id: "9", category: "Retail", start: 1981, end: 1989 },
];

// find >> we have a condition >> one object

let givenId = "4";

// let getObj = companies.find(function(obj){  // it returns object
//     return obj.id === givenId
// })
let getObj = companies.find((obj) => obj.id === givenId);
cl(getObj);

let getobj2 = companies.filter((obj) => obj.id === givenId); // filter method returns array
cl(getobj2);

let getIndex = companies.findIndex((comp) => {
  return comp.id === givenId;
});

cl(getIndex);

let posts = [
  { id: 123, msg: "You are not bad at all" },
  { id: 124, msg: "You are not Good at teaching" },
  { id: 125, msg: "You are Dumb" },
  { id: 126, msg: "You don't have value of others time" },
  { id: 127, msg: "I love the way you teach" },
];

let postId = 125;
// get index no of post // use splice method

let getPostIndex = posts.findIndex((post) => post.id === postId);
cl(getPostIndex);
posts.splice(getPostIndex, 1);
cl(posts);

// reduce method
ages = [15, 25, 16, 24, 28, 29, 36, 41, 48, 10, 12];

// let agestotal = ages.reduce(function(accumu, currentVal){
//   return accumu + currentVal
// }, 0)
let agestotal = ages.reduce((accumu, currentVal) => accumu + currentVal, 0);
cl(agestotal);
// when we set accumu === 0
// 0 + 15
// 15 + 25
// 40 + 16
// 56 + 24 ...

// when we don't set accumu
// 15 + 25

let doubelAgesTotal = ages
  .map((age) => age * 2)
  .reduce((acc, currentVal) => acc + currentVal, 0);
cl(doubelAgesTotal);

companies = [
  { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
  {
    name: "Company Two",
    id: "2",
    category: "  ReTail",
    start: 1992,
    end: 2008,
  },
  { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", id: "4", category: "RetaIl", start: 1989, end: 2010 },
  {
    name: "Company Five",
    id: "5",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
  {
    name: "Company Eight",
    id: "8",
    category: "Technology",
    start: 2011,
    end: 2016,
  },
  { name: "Company Nine", id: "9", category: "Retail", start: 1981, end: 1989 },
];

let compAgeTotal = companies
  .map((comp) => comp.end - comp.start)
  .reduce((acc, currentVal) => acc + currentVal, 0);
cl(compAgeTotal);

// 1st find out comp run at least for 10 years

let compAgeTotal2 = companies
  .filter((comp) => comp.end - comp.start >= 10)
  .map((comp) => comp.end - comp.start)
  .reduce((accumu, currentVal) => accumu + currentVal, 0);

cl(compAgeTotal2);

// some and every

let oldies = [25, 35, 45, 58, 59, 56];
let ages2 = [5, 15, 75, 45, 85, 65, 25];
let youngins = [2, 15, 16, 17, 14, 8];

// 1 condition >>
// We have given a condition and have to find out that
// at  least one element in a array shuld pass that condition

// some >> returns boolean

// let isAdultPresent = oldies.some((age) => {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// });
// let isAdultPresent = oldies.some((age) => {
//  return age > 18
// });

let isAdultPresent = oldies.some((age) => age > 18);

cl(isAdultPresent);

// let isAdultPresent1 = youngins.some(function(age) {
//   if(age > 18){
//     return true;
//   }else {
//     return false
//   }
// })

// let isAdultPresent1 = youngins.some(function(age) {
//   return age > 18
// })

let isAdultPresent1 = youngins.some((age) => age > 18);
cl(isAdultPresent1);

// every >>  boolean

// 1 condition >>
// We have given a condition and have to find out that
// all elements in a array shuld pass that condition

let iseveryOneisAdult = ages2.every((age) => {
  return age > 18;
});
cl(iseveryOneisAdult);

let iseveryOneisAdult2 = oldies.every((age) => age > 18);

cl(iseveryOneisAdult2);

let persons = [
  {
    fname: "Jhon",
    age: 20,
  },
  {
    fname: "Jen",
    age: 18,
  },
  {
    fname: "Jhony",
    age: 28,
  },
  {
    fname: "Janardhan",
    age: 38,
  },
];

let ispersonsAdult = persons.every((p) => {
  return p.age > 18;
});

cl(ispersonsAdult);

let isAtleastpersonsAdult = persons.some((p) => p.age > 18);

cl(isAtleastpersonsAdult);

// is at least on comp >> for 20 years
companies = [
  { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
  {
    name: "Company Two",
    id: "2",
    category: "  ReTail",
    start: 1992,
    end: 2008,
  },
  { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", id: "4", category: "RetaIl", start: 1989, end: 2010 },
  {
    name: "Company Five",
    id: "5",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
  {
    name: "Company Eight",
    id: "8",
    category: "Technology",
    start: 2011,
    end: 2016,
  },
  { name: "Company Nine", id: "9", category: "Retail", start: 1981, end: 1989 },
];

let atLeast20 = companies.some((c) => c.end - c.start >= 20);

cl(atLeast20);

// is every comp run for at least 10 years

// let atLeast10Every = companies.every(function(comp) {
//   return (comp.end - comp.start) >= 10
// })

let atLeast10Every = companies.every((comp) => comp.end - comp.start >= 10);

cl(atLeast10Every);

let arrays = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

// arrays >> is every memeber is array

iseveryArray = arrays.every((arr) => Array.isArray(arr));

cl("iseveryArray", iseveryArray);

// Array.isArray >> to find out given declr is array or not
let isArray = Array.isArray(ages2);
isArray = Array.isArray("Hello");
cl(isArray);

let arr = [1, 2, 3, 4, 5, 6, [7, [8, [9]]], [10, 12, 13]];

// arr.forEach((num) => {
//   if (Array.isArray(num)) {
//     num.forEach((n) => cl(n));
//   }else{
//     cl(num)
//   }
// });

let arr2 = arr.flat(Infinity);
arr2.forEach((num) => {
  cl(num);
});

// fill

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNumbers = numbers.fill("2");

cl(numbers);

cl(newNumbers);

// 20 >> 1,2,3,4,5,6,7 ... 20

function fillInNumbers(num) {
  return new Array(num).fill(0).map((n, i) => i + 1);
}

cl(fillInNumbers(20));

let demo = Array.from(document.querySelectorAll(".demo")); // nodelist
cl(demo);

// sort
ages = [15, 25, 16, 204, 28, 29, 36, 41, 48, 100, 102];
// let sortedAges = ages.sort((age1, age2) => {
//   if(age1 < age2){
//     return -1
//   }else {
//     return 1
//   }
// });
let sortedAges = ages.sort((age1, age2) => (age1 < age2 ? -1 : 1));

cl(sortedAges);

let sortAssendingComp = companies.sort((c1, c2) =>
  c1.end - c1.start < c2.end - c2.start ? -1 : 1
);
cl(sortAssendingComp)

persons = [
  {
    fname: "Jhon",
    age: 20,
  },
  {
    fname: "Jen",
    age: 18,
  },
  {
    fname: "Jhony",
    age: 28,
  },
  {
    fname: "Janardhan",
    age: 38,
  },
];

let sortDesPersons = persons.sort((p1, p2) => (p1.age > p2.age) ? -1 : 1) 
cl(sortDesPersons)