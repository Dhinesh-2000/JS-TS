import React from "react";
class Message extends React.Component{
    state;
    constructor(props){
        super(props)
        this.state={
            message:"Hello"
        }
    }
    updateHandler=(value)=>{
       this.setState({
        message:value
       })
    }
    render(){
        return <div>
            <h2>Message Component</h2>
            <h3>Message value:{this.state.message}</h3>
            <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>
            <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button>
            <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>
        </div>
    }
}
export default Message