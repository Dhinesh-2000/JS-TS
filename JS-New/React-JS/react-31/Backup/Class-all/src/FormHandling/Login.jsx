import React, { useState } from 'react'

const Login = () => {
    const [user,setUser]=useState({uName:"",password:""})
    let updateHandler=(event)=>{
        setUser({...user,[event.target.name]:[event.target.value]})
       }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
    }


  return( <div>
    <br />
      <h2>Login Details</h2>
      <br />
      <pre>{JSON.stringify(user)}</pre>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">User Name: </label>
        <input name="uName" type="text" onChange={updateHandler} /> <br />
        <label htmlFor="">Password: </label>
        <input name="password" type="text" onChange={updateHandler}  /> <br />
        <input type="Submit" Value='Login' />
      </form>
    </div>
  )
}
export default Login
