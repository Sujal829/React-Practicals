import { useState,useMemo, useCallback } from "react";


function Memoeg(){
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(0);

    const increase=useCallback(()=>{
        setCount(count+1)
    },[count])
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>Click</button>
            <h3>Item:{item}</h3>
            <button onClick={()=>{ console.log("item"); setItem(item+1)}}>Change Item</button>
        </div>
    )
}

export default Memoeg;