import React from "react";
class Message extends React.Component{
    state;
    constructor(props){
        super(props)
        this.state={
            message:"Hello"
        }
    }
    gmHandler=()=>{
        this.setState({
            message:"Good Morning"
        })
    }
    gaHandler=()=>{
        this.setState({
            message:"Good Afternoon"
        })
    }
    gnHandler=()=>{
        this.setState({
            message:"Good Night"
        })
    }
    render(){
        return <div>
            <h2>Message Component</h2>
            <h3>Message value:{this.state.message}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message