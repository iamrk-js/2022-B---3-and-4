let cl = console.log;

let lifeLine = "i love javaScript";

// I Love Javascript

// function titleCase(str){
//     let arr = str.split(' ');
//     let result = '';
//     arr.forEach(ele => {
//             result += ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase() + ' '
//     });
//     return result;
// }

// let result = lifeLine.split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase()).join(' ')

function titleCase(str){
    return str.split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase()).join(' ')
}

// cl(result)
cl(titleCase(lifeLine));

// lifeLine.toLowerCase().replace(//g, );

String.prototype.reverseString = function(str){
    if ( ! str ) { str = this; }
    cl('String is reversed');
    if(str){
    return str.split('').reverse().join('')
    }
}

String.prototype.titleCaseStr = function(str){
    if ( ! str ) { str = this; };
    if(str){
        return str.split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase()).join(' ')
    }
}
cl(lifeLine.titleCaseStr());



