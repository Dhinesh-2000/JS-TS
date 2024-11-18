import React,{Component} from 'react'

class Welcome extends React.Component{
    render(){
        return <div>
            <h2>Class Component</h2>
            <hr/>
            <h1>Hey Welcome {this.props.name} a k a {this.props.surname}</h1>
       
        
        </div>

    }
}

export default Welcome