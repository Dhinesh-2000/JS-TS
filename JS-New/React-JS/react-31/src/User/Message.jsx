import React, { Component } from 'react'

class Message extends Component {
     msg ="Good Morning"
     emp={'id':101,'name':'Dhinesh'}
  render() {
    
    return (
      <>
        <h2>Message:{this.msg}</h2>
        <h4>Employee:{JSON.stringify(this.emp)}</h4>
      </>
    )
  }
}

export default Message
