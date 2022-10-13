var cl = console.log;
var skills = [
  "HTML5",
  "CSS3",
  "SASS",
  "Bootstrap 3",
  "Bootstrap 4",
  "javaScript",
  "Es6",
  "Angular",
  "Node.js",
];

var ages = [10, 20, 30, 45, 85, 75, 95, 65, 25, 34];

// for (var i = 0; i < ages.length; i++) {
//   cl(ages[i]);
// }

// arrayName.forEach(function(ele){

// });

// foreach >> it is a HOF 
// HOF (Higher Order function) >> a function which accepts another function as parameter/arrguments
// arrayName >>  the array which we want to itrate
// callback function >> a function in forEach is called as callback function
// ele >> parameter in callback function >> it gives the array elements/memebers on by one

ages.forEach(function(age){
  cl(`The value of age is ${age}`)
})

var skills = [
  "HTML5",
  "CSS3",
  "SASS",
  "Bootstrap 3",
  "Bootstrap 4",
  "javaScript",
  "Es6",
  "Angular",
  "Node.js",
];


// skills.forEach(function(skill){
//   cl(`I love ${skill}`)
// })


var info = document.getElementById('info');
var result = '<ul class="list-group">';

skills.forEach(function(skill){
result +=  `
        <li class='list-group-item'>
            I love ${skill}
        </li>
      `
})

result += '</ul>';

info.innerHTML = result;










