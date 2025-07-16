//normal, fn expression, arrow function 
function sum(a,b){
    let c = a+b
    return c 
}
// console.log(sum(23,12))
//fn expression 
let square =function(a){
    // console.log(a**2)
    return a**2
}
// console.log(square(5))
//arrow function 
//if 1 parameter remove  ()
//if only return than remove {} and return 
// let cube = (a)=>{
//     return a**3
// }
let cube = a=> a**3

//call back function => when a fnc is passed as an argument to 
// another function and called inside it than it is known as call
// back function 

function squareAndCalculate(x,cb_fnc){
    let a = x**2
    let b = cb_fnc(a)
    return b 
}

function multiply3(a){
    return a*3
}
// console.log(squareAndCalculate(4,multiply3))
console.log(squareAndCalculate(6,x=>x+3))
//make fnc calculateInterest ,takes two args reporate, a callback
// fn of perticular bank that that is dependent of reporate

// function cal(repo,fnc){
//     let i = fnc(repo) 
//     return i
// }
// console.log(cal(4,x=>x+2))








