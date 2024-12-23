import React, { useState } from 'react'

const Registration = () => {
    let [user,setUser]=useState({uname:'',email:'',mobile:''})
    let unameHandler=(event)=>{
        setUser({...user,uname:event.target.value})
    }
    let emailHandler=(event)=>{
        setUser({...user,email:event.target.value})
    }
    let mobileHandler=(event)=>{
        setUser({...user,mobile:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user)
    }
  return (
    <React.Fragment>
        <pre>{JSON.stringify(user)}</pre>
        <form action="" onSubmit={submitHandler}>
            User Name : <input type="text" placeholder='User Name' onChange={unameHandler}/> <br /> <br />
            Email ID : <input type="email" placeholder='Email ID' onChange={emailHandler}/> <br /> <br />
            Mobile No : <input type="number" placeholder='Mobile No' onChange={mobileHandler}/> <br /> <br />
            <input type="Submit" value='Register' />
        </form>
    </React.Fragment>
  )
}

export default Registration
