//access dom element
let a = document.getElementById('para')
// console.log(a) 
let b = document.getElementsByClassName('x')//return html collection 
// console.log(b[1])
let c = document.getElementsByTagName('p')//return html collection
// console.log(c)
let d = document.querySelectorAll('.x')//return node list 
// console.log(d) 
let e = document.querySelector('.x')
// console.log(e)

//access text and html 
// console.log(a.innerText)
// a.innerText = 'new text' 
// console.log(a.innerHTML)
// a.innerHTML = '<u>hello </u>'
//changing styles of an element
let btn = document.getElementById('btn')
//remove -(hyphen ) from property and convert it to camel case 
btn.style.color= 'red'
btn.style.backgroundColor = 'lightgreen'

