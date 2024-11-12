import React from "react"
class Message extends React.Component{
     eid=101;
     ename="Rahul Gandhi";
     loc=["Wayanad","New Delhi"];
     details ={
        sal:45000,
        avail:true

    }
    render(){
    return <div>
        <h2>Message Component</h2>
        <h3>Employee ID:{this.eid}</h3>
        <h3>Employee Name:{this.ename}</h3>
        <h3>Employee Location:{this.loc[1]}</h3>
        <h3>Details:{JSON.stringify(this.details)}</h3>

    </div>
    }
}

export default Message