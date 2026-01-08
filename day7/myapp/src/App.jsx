import React from 'react';
import './App.css';
import Example from './components/ComponentDidUpdate';
class App extends React.Component{
  state={
    title:'',
    flag:true
  }
  componentDidMount(){
      console.log("component did mount");
  }

  handleChange=(e)=>{
    this.setState({
      title: e.target.value
    })
  }
  handleToggle=()=>{
    // this.setState({flag: !this.state.flag})
    // this.setState(prev => ({flag:!prev.flag}))
    if(this.state.flag){
      this.setState({flag:false})
    }else{
      this.setState({flag:true})
    }
  }
    render(){
        return(
            <div>
                <h1>hello</h1>
                <input type='text' onChange={this.handleChange} />
                <button onClick={this.handleToggle}>toggle</button>
                <Example title="sample1" />
                {this.state.flag &&
                <Example title={this.state.title} /> }
               
            </div>
        )
    }
}

export default App;
