import React , { Component } from 'react';
import './App.css';

import Button from './Button';
import Counter from './components/Counter'
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
        }
    }
    render(){
        return(
            <div>
                <h1>hello</h1>
                <Counter/>
                {/* <Button/> */}
            </div>
        )
    }
}

export default App;