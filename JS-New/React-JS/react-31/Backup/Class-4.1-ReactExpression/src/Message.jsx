import React from "react";
class Message extends React.Component{
     eid=101;
     ename="Rahul Gandhi"
     loc=["Wayanad","New Delhi","Bangalore"]
     details={
        sal:45000,
        avail:false
    }
    render(){
    return <div>
        <h2>Message Component</h2>
        <h3>Employee Id:{this.eid}</h3>
        <h3>Employee Name:{this.ename}</h3>
        <h3>Location:{this.loc[0]}</h3>
        <h3>Details:{JSON.stringify(this.details)}</h3>
    </div>
    }
}
export default Message