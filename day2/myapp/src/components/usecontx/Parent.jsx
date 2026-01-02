import Child from './Child.jsx'
import Contx from './Contx.jsx'
import Gchild from './Gchild.jsx'
function Parent(){
    return(
        <div>
            <h1>Parent Component</h1>
            <Contx.Provider value={"sujal"}>
                <Child/>
                <Gchild/>
            </Contx.Provider>
        </div>
    )
}
export default Parent;