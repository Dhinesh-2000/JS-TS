import React from "react"
let Counter=()=>{
   let [state,setState] = React.useState(1)


    return <div>
        <h2>Counter - Functional Component</h2>
        <h3>Counter ::{counter}</h3>
   let [state,setCounter] = React.useState(1)
   let [state,setCounter] = React.useState(1)
        <button onClick={()=>{setState(state+1)}}>INCR</button>
        <button onClick={()=>{setState(state-1)}}>DECR</button>
        
    </div>
}

export default Counter