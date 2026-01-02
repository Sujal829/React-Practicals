import Gchild from './Gchild.jsx'
function Child(prop){
    return(
        <div>
            <h1>child {prop.name}</h1>
            <Gchild name={prop.name}/>
        </div>
    )
}
export default Child;