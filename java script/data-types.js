// variables => it is a name of memory location that stores a value 
// let/const /var  variable_name
let a;
//semicolons are optional
// name rulings => reserve keywords are not allowed 
//alphabets , no. , _(underscore) , $
//can't start with a no.
let b =34
//1.number 
// console.log(typeof b)
//2.string => collection of charactors
let c = 'hello'
let d = 'everyone'
// console.log(c,d)
// console.log(typeof c)
//3.boolean
let e = true
let f = true
// console.log(e,typeof f)
//4.bigInt
let g = 122233434n
// console.log(typeof g)
//5. undefined
let h;
// console.log(typeof h)
//6. null
let i = null;
// console.log(i , typeof i)
//7.symbol
let s1 = Symbol('a')
let s2 = Symbol('a')
console.log(s1 == s2)
//object 
let person = {
    fName:'sunil',
    lName:'kumar',
    age:23,
    contact:{
        email:'a@b.com'
    },
    marks:[1,2,3],
    fullName:function(){
        return this.fName+' '+ this.lName
    }
}
console.log(person.fName,person.contact.email)
console.log(person.marks[1])
console.log(person.fullName())
//array
//collection of data types
let j = [34,'a',true]
console.log(j[0])












