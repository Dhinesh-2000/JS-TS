import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            
        })
    }
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ClassTimer
