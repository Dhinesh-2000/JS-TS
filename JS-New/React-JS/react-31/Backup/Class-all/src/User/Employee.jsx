import React, { Component } from 'react'

class Employee extends Component {
    emp={
        eid:101,
        ename:"Dhinesh",
        loc:['wayanad','New Delhi','Bangalore'],
        address:{city:'Noida',PIN:636303}
    }
  render() {
    return (
      <>
      <h2>Employee Copmponent</h2>
      <pre>{JSON.stringify(this.emp)}</pre>
      </>
    )
  }
}

export default Employee

