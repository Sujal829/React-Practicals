import { Component } from "react"
import "./App.css"
import Displaycounter from './components/displayCounter';
class App extends Component{
  constructor(props){
    super(props)
    console.log("constructor")
    this.state={
      count:0
    }
  }
  state = {
    count:0
  }
  handleClick=()=>{
    this.setState({
      count:this.state.count+1
    },()=>console.log(this.state.count)
    )
  }

  componentDidMount(){
    console.log("componentDidMount");
  }
    shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextState);
    if (nextState.count <= 5) {
      return true; // ✅ allow re-render
    } else {
      return false; // ❌ block unnecessary re-renders
    }
  }

   componentDidUpdate(preveProps,prevState){
    console.log("componentDidUpdate", preveProps,prevState);
    if(prevState.count!=this.state.count && this.state.count==5)
    {
      console.log("counter 5");
      this.setState({
        count:0
      })
    }
  } 

  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <h1>{this.state.count}</h1>
        <Displaycounter counter={this.state.count}/>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increment</button>
      </div>
    )
  }
}

export default App
