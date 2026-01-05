import React, { Component } from "react";
import User from "./user";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showUser: true,
      name: "Sujal"
    };
  }

  render() {
    return (
      <div>
        <h1>React Lifecycle Example 🧩</h1>

        <button onClick={() => this.setState({ showUser: !this.state.showUser })}>
          {this.state.showUser ? "Hide User (Unmount)" : "Show User (Mount)"}
        </button>

        <button onClick={() => this.setState({ name: "Manish" })}>
          Update Name
        </button>

        {/* Conditionally render child */}
        {this.state.showUser && <User name={this.state.name} />}
      </div>
    );
  }
}

export default App;
