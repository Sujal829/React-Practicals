import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    console.log("✅ User Component Mounted");
  }

  componentDidUpdate() {
    console.log("🔁 User Component Updated");
  }

  componentWillUnmount() {
    console.log("❌ User Component Will Unmount");
  }

  render() {
    return (
      <div>
        <h2>Hello, {this.props.name}</h2>
      </div>
    );
  }
}

export default User;
