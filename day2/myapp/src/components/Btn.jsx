import {useState ,useEffect ,useRef} from 'react';
function Btn(prop){
    const finp = useRef(null);
    const [count,setcount]= useState(0);
    useEffect(()=>{
        console.log("Mount");
    },[]);

    useEffect(()=>{
        console.log("Update");
    },[count]);

    useEffect(()=>{
        return (
            ()=>{console.log("unmount")}
        )
    },[]);

    const inpf=()=>{
        console.log(finp);
        console.log("message");
        finp.current.focus();
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setcount(count+1)}}>{prop.name}</button>
            <input ref={finp} type="text" />
            <button onClick={()=>{inpf()}}>Focus</button>
        </div>
    )
}

export default Btn;