import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Hello Dhinesh</div>
    // return (
    //     this.state.isLoggedIn? <div>Hello Dhinesh</div>:
    //     <div>Hello Guest</div>
    // )

    // let message
    // if (this.state.isLoggedIn) {
    //     message= <div>Hello Dhinesh</div>
    // }
    // else{
    //     message=<div>Hello Guest</div>
    // }

    // if (this.state.isLoggedIn) {
    //     return <div>
    //         Welcome Dhinesh
    //     </div>
    // }
    // else{
    //     return(
    //         <div>
    //             Hello Guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //    {message}
    //   </div>
    // )
  }
}

export default UserGreeting
