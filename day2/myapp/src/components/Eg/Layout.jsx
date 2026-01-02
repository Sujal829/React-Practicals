import { useLayoutEffect ,useState , useRef } from "react";

function Eg1(){
    const [height,setheight]=useState(0);
    const [expand , setexpand]=useState(false);
    const ref=useRef(null);

    
    const handleexpand=()=>
    {
        setexpand(!expand);
    }
    useLayoutEffect(()=>{
        if(expand && ref.current)
        {
            const height=ref.current.scrollHeight;
            setheight(height);
        }
        else
        {
            setheight(0);
        }
    }
    ,[expand])

    return (
        <div>
            <div ref={ref} style={{height:height,transition:'all 2s ease-in-out',backgroundColor:"red",width:"300px"}}>
              <p>hello world</p>
                
            </div>
            
            <button onClick={()=>{handleexpand()}}>click</button>
        </div>
    )
}

export default Eg1;