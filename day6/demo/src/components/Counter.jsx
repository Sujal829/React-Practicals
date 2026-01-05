import React from 'react';
import {useState, useEffect } from "react";
function Counter (){
    const [counter , updatecounter]= useState(0);
    useEffect(()=>{
        console.log("Component mounted");
        return ()=>{console.log("Component unmounted");}
    },[]);
    useEffect(()=>{
        if(counter >0) console.log("Component updated");
    },[counter]);

    useEffect(()=>{
        if(counter === 5){
        console.log("Component unmounted");
        }
    });
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={()=>updatecounter(counter+1)}>Increment</button>
        </div>
    );  

}
    
export default Counter;