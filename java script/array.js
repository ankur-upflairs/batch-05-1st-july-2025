//array => collection of data types 
let arr = ['hello',true,34]
// console.log(arr.at(2))
// console.log(arr[1])
// console.log(arr.length) 
//create an array of 5 element by taking value from user 
//and print each value using loop

// let a1 = prompt('enter element')
// let a2 = prompt('enter element')

// let arr1 = [a1,a2] 
// for(let i = 0 ; i<arr1.length;i++){
//     arr1[i]
// }
// let a = [ 2,3,5,6,8,1]
// a.shift()
// a.unshift(34,6)
// a.pop()
// a.push(12)
// console.log(a.concat([3,5,6]))
// let b =a.fill(1,0,3)
// let b = a.includes(5)
// let b = a.reverse()
// let b =a.slice(1,4) 

// console.log(`orginal array=>${a} \n method return =>${b}`)
// for(let i in a){
//     // console.log(a[i])
// }
// for(let i of a){
//     console.log(i)
// }
//delete an element from an array at specific position
//insert an element from an array at specific position
let a = [ 2,3,5,6,8,1]
// a.forEach((value,index,array)=>{
//     console.log(value,index,array)
// })
// console.log()
let double = (v,i)=>{
    return v*2
}
let b = a.map(double)

console.log(b)
// make function that create loop over an array and take an cb fnc
// the cb is called on every iteration and whatever it return
//main function is store all values in an array and return it


// function MyMap(arr,cb_fnc){
//     let newArr = []
//     for(let i =0;i<arr.length ;i++){
//        let y = cb_fnc(arr[i],i,arr) 
//        newArr.push(y)
//     }
//     return newArr
// }












