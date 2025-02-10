import { INCR,DECR } from "./product.action";

let initialState={
    Product_Name:"Marker Pen",
    Price:30,
    qty:1,
    img:""

}

let ProductReducer=(state=initialState,action)=>{
   switch(action.type){
    case 'INCR':
        return {...state,qty:state.qty+1}
    case 'DECR':
        return{...state,qty:state.qty-1}
    default:
        return state
   }
}

export {ProductReducer}