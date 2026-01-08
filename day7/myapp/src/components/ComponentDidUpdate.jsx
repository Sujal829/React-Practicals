import React from 'react'

class Example extends React.Component{
    
state={
    value:'',
}
    // componentDidMount(){
    //     console.log('component did mount');
    // }
    handleChange=(e)=>{
        // console.log(e.target.value);
        this.setState({value:e.target.value});
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    // componentDidUpdate(prevProps,prevState){
    //     console.log('component did update');
    //     // console.log('previous props',prevProps);
    //     // console.log('previous state',prevState);
    //     // console.log('current state',this.state.value);
    //     // if(this.state.value.trim().length)
    //     // {
    //     // console.log('currrent state',this.state.value);         
    //     // }
    //  }

    // shouldComponentUpdate(nextProps,nextState){  // to handel unnesesary rerendering of components
    //     console.log('should component update');
    // //  console.log(`next ${nextState.value} , state ${this.state.value}`);
    // //  console.log(nextProps.title != this.props.title);
    //     if(nextProps.title != this.props.title || nextState.value!=this.state.value)
    //     {
    //         console.log("next state",nextState);
    //     }
    //     return true;
    // }
      componentWillUnmount(){
      console.log("component will unmount")
  }
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
                <p>{this.state.title}</p>
                <input value={this.state.value} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default Example;