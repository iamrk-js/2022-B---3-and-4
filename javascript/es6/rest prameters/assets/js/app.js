let cl = console.log;

let runner = ["Jhon", 1234, 7, 15, 20, 45];

// ruunerName = runner[0]
// ruunerId = runner[1]
// times = [7, 15, 20, 45 ]

let [ruunerName, ruunerId, ...times] = runner;

cl(ruunerName, ruunerId, times);

const jump = document.getElementById("jump");

// cl(jump);
// // let text = jump.textContent.split('')
// let text = [...jump.textContent]
// cl(text)
// let maped = text.map(ele => {
//     return `<span>${ele}</span>`
// })
// cl(maped)
// jump.innerHTML = maped.join('')

function wrappSpan(text) {
  return [...text].map((ele) => `<span>${ele}</span>`).join("");
}

jump.innerHTML = wrappSpan(jump.textContent);

let obj = {
  x: 10,
  y: 20,
  z: 30,
};


function multi(o) {
    let {x,y,z} = o;
    return x * y * z
}

cl(multi(obj));


let names = ["Jhon", "Doe"];

function greet(fn, ln){
    cl(`Hello World I'm ${fn} ${ln}`)
}

greet(...names) // "Jhon", "Doe"


// I love JavaScript >> 'aeiou'

let str = 'I love javaScript.'
let result = '';
// for (let i = 0; i < str.length; i++) {
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i'  || str[i] == 'o'  || str[i] == 'u'){
//         result += ''
//     }else {
//         result += str[i]
//     }
// }

// for (let i = 0; i < str.length; i++) {
//    let vo = 'aeiou';
//    if(vo.includes(str[i].toLowerCase())){
//     result += ''
//    }else {
//     result += str[i]
//    }
// }

result = str.replace(/[aeiou]/ig, '');
cl(result)

result = [...str].filter(ele => !'aeiou'.includes(ele.toLowerCase())).join('');

cl(result);