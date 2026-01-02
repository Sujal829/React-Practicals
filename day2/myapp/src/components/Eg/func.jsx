import React,{useState , useEffect} from 'react';

function Func(){
    const [count,setcount]=useState(null);
    return (
        <div>
            <h1>Function Component</h1>
            <h3>{count}</h3>
            <button onClick={()=>{setcount(count+1); console.log(count)}}>Increment</button>
        </div>
    )

}

export default Func;