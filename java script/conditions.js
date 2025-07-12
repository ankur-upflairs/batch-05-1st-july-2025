const prompt = require('prompt-sync')()

let age =23
// if(age > 18){
//     console.log('you are welcome')
// }
// else {
//     console.log('you are not welcome')
// }
//if-else ladder
// let p = parseInt(prompt('enter your percentage : -  '))

// if(p>=0 && p <=30){
//     console.log('fail')
// }
// else if(p>=31 && p <=50){
//     console.log('grade c')
// }
// else if(p>=51 && p <=80){
//     console.log('grade b')
// }
// else if(p>=81 && p <=100){
//     console.log('grade a')
// }
// else {
//     console.log('not b/w 0-100')
// }
/*Check if a number is positive, negative, or zero.

Check if a number is even or odd.

Check if a person is eligible to vote (age ≥ 18).

Compare two numbers and print the greater one.

Check if a number is divisible by 5.

Check if a number is a multiple of 3 or 7.

Check if two numbers are equal or not.*/

// condition ? statement1 : statement2 

// age > 18 ? console.log('allowed') : console.log('not alllowed')
let n = parseInt(prompt('enter no b/w 1-7 : -  '))


switch (n) {
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('wednessday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
        break;

    default:
        console.log('invalid no')
        break;
}
//take no. input from user 1-12 and print month names










