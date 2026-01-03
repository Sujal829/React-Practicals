import {useState} from 'react';

function Btn(props){
    const [count , setCount] = useState(0);
    function increase(){
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{count}</h2>
            <button onClick={increase}>Click</button>
        </div>
    )
}

export default Btn;

