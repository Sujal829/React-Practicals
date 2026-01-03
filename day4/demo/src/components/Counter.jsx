import { Component } from "react";

class A extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    state={
        count:0
    }
    componentDidMount(){
        console.log("mounted");
    }
    // componentDidUpdate(prevprop,prevstate){
    //     console.log(prevprop);
    //     console.log(prevstate);
    //     console.log("updated");
    // }

    // shouldComponentUpdate(nextprop,nextstate){
    //     console.log(nextprop);
    //     console.log(nextstate);
    //     if(nextstate.count >5){
    //         return false;
    //     }
    //     console.log("should update");
    //     return true;
    // }

    // componentWillUnmount(){
    //     console.log("unmount");
    // }
    render() {
        return <div>
                <h1>Hello</h1>
                <p>{this.props.name}</p>
                <div>{this.state.count}</div>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>+</button>
                </div>;
    }
}
export default A;