import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrAction,decrAction } from '../redux/product/product.action'
const Product = () => {
  let dispatch = useDispatch()
  let product=useSelector((state)=>{
    return state;
  })
  let incrHandler=()=>{
    dispatch(incrAction())
  }
  return (
    <div>
      <pre>{JSON.stringify(product)}</pre>
      <h3>Product Component</h3>
      <hr />
      <h2>value : {product.qty}</h2>
      <button onClick={incrHandler}>IN</button>
      <button onClick={()=>{dispatch(decrAction())}}>DE</button>
    </div>
  )
  
}

export default Product
