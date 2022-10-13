let cl = console.log;

let info = ['Jhon Doe', 'jhon@gmail.com', 1234567890];

// let fullName = info[0];
// let email = info[1];
// let contact = info[2];

// It allow us to exctract data from array/object
// and map/set/stores into a diffrent/disrinct declrations

let [fullName, email, contact] = info;

cl("fullName" , fullName, "email", email, "contact", contact);

let data = "Cricket, Kapil Dev, 1983";
// cl(data.split(', '))
// sportsName, captain, year 

let [sportsName, captain, year] = data.split(', ')

cl(captain);


let team = ['Dada', 'Viru', 'Sachin', 'Yuvi', 'Chiku', 'Rohit'];

// let cap = '';
// let vc = '';
// let players = [];

// let cap = team[0], vc = team[1], players = [];

// for (let i = 0; i < team.length; i++) {
//     if(i === 0){
//       cap = team[i]
//     }else if(i === 1){
//       vc = team[i]
//     }else{
//       players.push(team[i])
//     }
// }

// for (let i = 2; i < team.length; i++) {
//   players.push(team[i])
// }
// spread and rest 

team = ['Dada', 'Viru', 'Sachin', 'Yuvi', 'Chiku', 'Rohit'];
let [cap, vc, ...players] = team;

cl(cap, vc, players);




