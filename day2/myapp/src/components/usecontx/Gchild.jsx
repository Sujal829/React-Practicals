import Contx from './Contx.jsx';
import {useContext} from 'react';

function Gchild (){
    const data = useContext(Contx);
    return(
        <div>
            <h1>Grand Child {data}</h1>
        </div>
    )
}
export default Gchild;