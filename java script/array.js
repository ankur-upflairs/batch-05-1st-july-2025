//array => collection of data types
let arr = ["hello", true, 34];
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
// let a = [2, 3, 5, 6, 8, 1];
// a.forEach((value,index,array)=>{
//     console.log(value,index,array)
// })
// console.log()
// let double = (v, i) => {
//   return v * 2;
// };
// let b = a.map(double);

// console.log(b)
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
// How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]
// let x = [1, 2, 3, 4, 5];
// let y = [];
// for (let i =0;i<x.length;i++) {
//     // console.log(i)
//   for (let j = i + 1; j < x.length; j++) {
//       console.log(i, j);
//     if ((x[i] + x[j]) == 6) {
//       y.push([x[i], x[j]]);
//     }
//   }
// }
// console.log(y);

let a = [2, 3, 5,12, 6, 8, 1];
// console.log(a.every((v,i)=>{
//     return v < 7 
// }))

// console.log(a.some((v,i)=>{
//     return v < 7 
// }))

// let b = a.filter((v,i)=>v<=5)
// console.log(b)
// console.log(a.filter((v,i)=>i!=2))
// let c = [[2,3],[5,6]]
// console.log(c.flat(Infinity))

// console.log(a.find(v=>v>7))
// console.log(a.findIndex(v=>v>4))
// console.log(a.sort((a,b)=>a-b)) 

// a.splice(2,0,34,56)
// console.log(a)

// console.log(a.reduce((prev,current,index,array)=>{
//     return prev + current 
// },0))
console.log(Array.isArray(a))
//write a function to flatten an array depth => infinite
// make function to calculate multiplication of array elements (reduce) 









