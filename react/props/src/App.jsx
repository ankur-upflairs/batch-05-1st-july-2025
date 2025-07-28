import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllProducts from './components/AllProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AllProducts />
    </>
  )
}

export default App
