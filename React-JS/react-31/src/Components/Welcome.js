import React,{Component} from 'react'

class Welcome extends React.Component{
    render(){
        const{name,surname}=this.props
        //const{state1,state2}=this.state 
        return <div>
            <h2>Class Component</h2>
            <hr/>
            <h1>Hey Welcome {name} a k a {surname}</h1>
       
        
        </div>

    }
}

export default Welcome