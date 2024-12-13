import React, { Component } from 'react'

class Message extends Component {
  state={
    msg:"Hello"
  }
    gmHandler=()=>{
    this.setState("Good Morning")
  }
    gnHandler=()=>{
    this.setState({msg:this.state.msg("Good Night")})
  }
  
  render() {
    return (
      <div>
        <h2>value:{this.state.msg}</h2>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
      </div>
    )
  }
}

export default Message

