import React, { Component } from 'react'

class Product extends Component {
    state={
        product_Name:'Kross Hexa 29T',
        qty:1,
        price:20688,
        image:'https://rukminim2.flixcart.com/image/224/224/xif0q/cycle/d/r/i/hexa-29t-front-suspension-dual-disc-alloy-frame-shimano-gear-15-original-imah2yfq4faabkac.jpeg?q=90'
    }
 increHandler=()=>{
   this.setState({qty:this.state.qty+1})
 }
 decrehandler=()=>{
    this.setState({qty:this.state.qty-1})
 }
  render() {
    return (
    //   <div>
    //     <h3>Quantity:{this.state.qty}</h3>
    //     <button onClick={this.increHandler}>Increment</button>
    //     <button onClick={this.decrehandler}>Decrement</button>
    //   </div>
           <div className='container'>
                    <div className="row">
                    <div className="col-8">
                        <table className='table'>
                            <thead>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                            </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product_Name}</td>
                                <td><img width={"80px"} src={this.state.image} alt="" /></td>
                                <td>{this.state.price}</td>
                                <div>
                                <td>{this.state.qty}</td>
                                <button className='fa fa-plus-circle' onClick={this.increHandler}>+</button>
                                <button className='fa fa-minus-circle' onClick={this.decrehandler}>-</button>
                                </div>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
               </div>
    )
  }
}

export default Product
