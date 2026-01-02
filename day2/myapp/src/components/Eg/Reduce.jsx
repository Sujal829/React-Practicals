import {reducer , initialstate } from './Reducer.jsx'
import {useReducer} from 'react'



function Eg2(){
    const [state,dispatch]= useReducer(reducer,initialstate)

    const handlechange =(e)=>{
        dispatch({
            type:e.target.name,
            value:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(state)
    }
    return(
        <div>
            Name: <input type="text" name="name" onChange={handlechange}/>
            Email:<input type="email" name="email" onChange={handlechange}/>
            Password:<input type="password" name="password" onChange={handlechange}/>
            <input type="submit" onClick={handleSubmit} /> 
        </div>
    )
}
export default Eg2;