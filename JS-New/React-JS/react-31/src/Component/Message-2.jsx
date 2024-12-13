import React, { useState } from 'react'

let Message = () => {
  let [msg,setMsg]=useState("Hello")
  // let gmHandler=()=>{
  //   setMsg("Good Morning")
  // }
  // let gnHandler=()=>{
  //   setMsg("Good Night")
  // }
  return (
    <div>
      <h2>Message value:{msg}</h2>
      <button onClick={()=>{setMsg("Good Morning")}}>GM</button>
      <button onClick={()=>{setMsg("Good Night")}}>GN</button>
    </div>
  )
}

export default Message

