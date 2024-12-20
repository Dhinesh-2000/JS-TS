import React, { useState } from 'react'

const Registration = () => {
    let [user,setUser]=useState({uname:'',email:'',mobile:''})
    let updateHandler=(event)=>{
        setUser({...user,[event.target.name]:[event.target.value]})
       }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
    }
  return (
    <React.Fragment>
        <pre>{JSON.stringify(user)}</pre>
        <form action="" onSubmit={submitHandler}>
            User Name : <input type="text" placeholder='User Name' onChange={updateHandler} name='uname'/> <br /> <br />
            Email ID : <input type="email" placeholder='Email ID' onChange={updateHandler} name='email'/> <br /> <br />
            Mobile No : <input type="number" placeholder='Mobile No' onChange={updateHandler} name='mobile'/> <br /> <br />
            <input type="Submit" value='Register' />
        </form>
    </React.Fragment>
  )
}

export default Registration
