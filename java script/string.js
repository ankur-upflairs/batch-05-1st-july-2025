//collection of charactors
const str = 'hello'
//template string =>
//can write variable inside string using ${}
//can write multiline string
let name = 'prince'
let a = `hello ,
 my name is ${name} `
// console.log(a)
let b = "hello everyone"
//string methods 
//indexing => a way to indentify / access charactors inside string
//starts with 0 , and goes upto length -1
// console.log(b.length)
// console.log(b[1])
// console.log(b.at(3))
// console.log(b.endsWith('one'))
// console.log(b.startsWith('hell'))
// console.log(b.concat(' good afternoon'))
// console.log(b.includes('lo'))
// console.log(b.indexOf('lo'))
// console.log(b.lastIndexOf('e'))
let c ='   xyz   '
// console.log(c.padStart(6,'7'))
// console.log(c.padEnd(6,'7'))
// console.log(c.repeat(3))
// console.log(c.trim())
// console.log(c.toUpperCase())
// console.log(b.slice(6,9))
// console.log(b.replace('e','x'))
// console.log(b.replaceAll('e','x'))
let arr = b.split(' ')
// console.log(arr)
// console.log(arr.join(' '))
let x = " learn js "
console.log(x.trim())

/*
What is the difference between str.charAt(2) and str[2]? Which one is preferred and why?

Given str = "hello world", what does str.toUpperCase() return?

What does str.toLowerCase() return if str = "JavaScript"?

Given str = " learn js ", how can you remove all the leading and trailing spaces?

What will be the result of "abc".repeat(3)?

If str = "hello world", what does str.includes("lo", 3) return and why?

How do you check if a string starts with a specific substring? For example: "codewithme".startsWith("code")

What is the output of "hello".endsWith("lo")?

How can you find the position of the first occurrence of "a" in "banana" using a string method?

How is indexOf() different from lastIndexOf()? Explain with "banana" as an example.

Given str = "frontend-backend", what will str.split("-") return?

What is the use of substring(2, 6)? How is it different from slice(2, 6)?

What is the result of "abc".padStart(6, "*")? What about padEnd?

How can you replace "hello" with "hi" in the string "hello world" using a string method?

Write a code snippet to reverse a string "hello" using built-in methods.
 
*/