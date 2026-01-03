import React,{useState,useEffect} from 'react'

function Count(){
    const [count,setcount]= useState(0);
    useEffect(()=>{
        console.log("Mount");
    },[]);

    useEffect(()=>{
        console.log("DidUpdate");
    },[count])

    useEffect(()=>{
        return ()=>{
            console.log('unmount');
        }
    },[])
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{setcount(count+1)}}>+</button>
            <button onClick={()=>{setcount(count-1)}}>-</button>
            <button onClick={()=>{setcount(0)}}>Reset</button>
        </div>
    )
}

export default Count;