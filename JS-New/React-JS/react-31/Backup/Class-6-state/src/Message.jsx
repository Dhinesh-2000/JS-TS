import React from "react";
class Message extends React.Component{
    //msg="Hello"
    state={
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({msg:"Good Morning, Bruh!"})
    }
    gnHandler=()=>{
        this.setState({msg:"Good Night, Bruh!"})
    }
  render(){
    return <div>
        <h1>Message Component</h1>
        <h3>Message Value:{this.state.msg}</h3>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
    
    </div>
  }  
}

export default Message