import React, { useState } from 'react'

const Product = () => {
    let [product,setProduct]=useState({product_name:'Cycle',qty:1,price:4500})
    
  return (
    <div>
      <h4>Product Name:{product.product_name}</h4>
      <h4>Product Name:{product.price}</h4>
      <button onClick={()=> setProduct({...product,qty:product.qty-1})}>DECR</button> {product.qty} <button onClick={()=>{
      setProduct({...product,qty:product.qty+1})
    }}>INCR</button>
    </div>
  )
}

export default Product
