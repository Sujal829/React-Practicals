import Gchild from './Gchild.jsx'
import Contx from './Contx.jsx'
import { useContext } from 'react';
function Child(){
    const data = useContext(Contx);
    return(
        <div>
            <h1>child {data}</h1>
        </div>
    )
}
export default Child;