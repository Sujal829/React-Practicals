import React, { Component } from 'react'

class Comp extends Component {
    state ={
        count : 0
    }
    componentDidMount(){
        console.log("component did mount")
    }
    componentDidUpdate(){
        console.log("component did update")
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>click</button>
            </div>
        )
    }
}

export default Comp