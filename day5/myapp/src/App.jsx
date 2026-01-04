import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
 import Card from './components/card'
 import Itemlist from './components/itemlist'
 import Item from './components/item'
function App() {
  const [count, setCount] = useState(0)   // useState is a hook which is used to store the value of count and setCount is a function which is used to change the value of count

  return (
    <>
    <div>
      <h1>hello</h1>
      <h2>{count}</h2>
      { <button onClick={()=>setCount(count+1)}>click me</button> /* setCount is a function which is used to change the value of count */}
      
      <button onClick={()=>setCount(count-1)}>decrement</button>
      <button onClick={()=>setCount(0)}>reset</button>
      {/* <Card />
      <Card name={"sujal"} age={18} email={"sujal@gmail.com"}/>
      <Card name={"mainsh"} age={24} email={"manish@gmail.com"}/>
      <Card name={"pratik"} age={36} email={"pratik@gmail.com"}/> */}
      <Itemlist/>
      <Item/>
    </div>
    </>
  )
}
export default App
