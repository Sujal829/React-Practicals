import {Component} from 'react';
class Greet extends Component {
    constructor(prop){
        super(prop);
    }
    state={
        count:0
    }
    componentDidMount(){
        console.log("Mount");
    }
    // componentDidUpdate(prevprops,prevstate){
    //     console.log(prevprops);
    //     console.log(prevstate);
    //     console.log("update");
    // }

    shouldComponentUpdate(nextprop,nextstate){
        if(nextstate.count >5){
            console.log("dont update");
            return false
        }
        console.log("update");
        return true;
    }

    componentWillUnmount(){
        console.log("unmount");
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default Greet;