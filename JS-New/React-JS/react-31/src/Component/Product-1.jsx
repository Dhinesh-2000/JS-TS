import React, { Component } from 'react'

class Product extends Component {
    state={
       qty:1
    }
 increHandler=()=>{
   this.setState({qty:this.state.qty+1})
 }
 decrehandler=()=>{
    this.setState({qty:this.state.qty-1})
 }
  render() {
    return (
      <div>
        <h3>Quantity:{this.state.qty}</h3>
        <button onClick={this.increHandler}>Increment</button>
        <button onClick={this.decrehandler}>Decrement</button>
      </div>
    )
  }
}

export default Product
