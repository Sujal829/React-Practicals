import { Component } from "react";

class Displaycounter extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}
export default Displaycounter;