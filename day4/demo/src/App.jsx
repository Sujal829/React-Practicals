import Btn from './components/Btn.jsx'
import './App.css';
import A from './components/Counter.jsx'
import { useState  } from 'react';
import Count from './components/Count.jsx'
function App(){
  const [flag,setflag]=useState(true);

  return(
    <div>
      {/* <Btn name={"sujal"}/> 
      {flag && <A id={'1'}/>}
      <button onClick={()=>{setflag(false)}}>click me</button>   */}
      {flag &&<Count/>}
      <button onClick={()=>{setflag(false)}}>click me</button>
       {/* <Count/> */}
       {/* <A name={"demo"}/> */}

    </div>
  )
}

export default App;