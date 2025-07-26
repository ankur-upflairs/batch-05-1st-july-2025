import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from './Header.jsx'
import Xyz, { Content,Footer as Foot } from "./Content.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Xyz />
      <Content />
      {/* <Footer /> */}
      <Foot />
    </>
  );
}

export default App;

//============================================
// //1.functional and class component 
// //functional component => is a normal fnc but its name start with capital letter
// //a component always return jsx 
// //to use a component call it as tag inside jsx

// function Header() {
//   return <div>
//     this is header component
//   </div>
// }
// function Content() {
//   return <div>
//     this is Content component
//   </div>
// }
// function Footer() {
//   return <div>
//     this is footer component
//   </div>
// }
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Header></Header>
//       <Content />
//       <Footer />
//     </>
//   );
// }

// export default App;

//==================    
// function show(){
//   for (let index = 0; index < 10; index++) {  
//   }
// }
// function App() {
//   const [count, setCount] = useState(0);
  //jsx => javascript extenstion
  //writing html inside js
  //1.complete jsx must have a single parent
  //2. every tag must be closed
  //use className insteed of class
  // {} in jsx =>
  // to write javascript inside jsx
  //donot use if-else or loop inside {}

//   let element = (
//     <div className="a">
//       {show()}
//       <h1>hello</h1>
//       <hr></hr>
//       <h1>everyone</h1>
//       <input type="text" />
//     </div>
//   );
//   let name = "sunil";
//   let el1 = (
//     <div>
//       <p>this is sample jsx paragraph</p>
//       <p>hello , my name is {name}</p>
//     </div>
//   );

//   return (
//     <>
//       {element}
//       {el1}
//     </>
//   );
// }

// export default App;
