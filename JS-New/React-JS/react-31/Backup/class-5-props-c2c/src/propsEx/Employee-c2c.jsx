import React from "react";
class Employee extends React.Component{
    render(){
        return <div>
            <h2>Employee Component</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Employee ID:{this.props.userID}</h3>
            <h3>Employee Name:{this.props.uName}</h3>
            <h3>Email:{this.props.uDetails.email}</h3>
        </div>
    }
}

export default Employee