import React,{useState} from 'react';
// import Eg2 from './components/Eg/Reduce.jsx';
import Layout from './components/Eg/Layout.jsx';
import Eg2 from './components/Eg/Layout.jsx'
import Memoeg from './components/Eg/Memo.jsx'
import Comp from './components/Eg/comp.jsx'
import Func from './components/Eg/func.jsx'
function App(){
  const [flag,setflag]=useState(true);
  return (
    <div>
      {/* <Eg2/> */}
      {/* <Layout/> */}
      <Comp />
      <Func />
      {/* <Memoeg /> */}
    </div>
  )
}

export default App;