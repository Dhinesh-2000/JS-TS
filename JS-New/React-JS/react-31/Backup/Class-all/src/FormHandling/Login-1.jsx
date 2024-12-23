import React, { useState } from 'react'

const Login = () => {
    const [user,setUser]=useState({name:"",password:""})
   let nameHandler=(event)=>{
      setUser({...user,name:event.target.value})
    }
    let passwordHandler=(event)=>{
        setUser({...user,password:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
    }

  return (
    <div>
      <h2>Login Details</h2>
      <pre>{JSON.stringify(user)}</pre>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">User Name: </label>
        <input type="text" onChange={nameHandler} /> <br />
        <label htmlFor="">Password: </label>
        <input type="text" onChange={passwordHandler} /> <br />
        <input type="Submit" Value='Login' />
      </form>
    </div>
  )
}

export default Login
