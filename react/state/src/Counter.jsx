import React, { useState } from 'react'

function Counter() {
    //state is memory of comp
    //when state changes component re-renders
    //state is immutable u can not change state directly
    //use setter fn to change state 
    //it preserve the value b/w re-renders 
    const [count,setCount] = useState(0)
    function increase() {
        setCount(count+1)
    }
    
  return (
    <div>
        <button onClick={()=>setCount(count-1)}>decrease</button>
        {count}
        <button onClick={increase}>increase</button>
    </div>
  )
}

export default Counter 

//=============================
// function Counter() {
//     function show(){
//         alert('button clicked')
//     }
//     function showName(name) {
//         alert(`welcome , Mr. ${name}`)
//     }
//   return (
//     <div>
//         <button onClick={show}>click here</button>
//         <button onClick={(event)=>{console.log(event);showName('sunil')}}>with arguments</button>
//     </div>
//   )
// }

// export default Counter

