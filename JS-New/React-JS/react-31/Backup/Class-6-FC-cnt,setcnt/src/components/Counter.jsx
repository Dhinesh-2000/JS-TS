import React from "react"
let Counter=()=>{
   let [counter,setCounter] = React.useState(1)


    return <div>
        <h2>Counter - Functional Component</h2>
        <h3>Counter ::{counter}</h3>
        <button onClick={()=>{setCounter(counter+1)}}>INCR</button>
        <button onClick={()=>{setCounter(counter-1)}}>DECR</button>
        
    </div>
}

export default Counter