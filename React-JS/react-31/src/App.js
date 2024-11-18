import React,{Component} from "react"
import Greet from "./Components/Greet"
import Welcome from "./Components/Welcome"
import Hello from "./Components/Hello"
import Message from "./Components/Message"

class App extends Component{
  render(){
  return( <div className="App">
    {/* <h1>App Component</h1>
     <hr/>
    <Greet name ="Dhinesh" surname="Batman" />
    <Greet name ="Pranav" surname="SpiderMan"/>
    <Greet name="Sara" surname="Super Women"/>
    <hr/>
     <Welcome name="Dhinesh" surname="Batman"/>
     <Welcome name ="Pranav" surname="SpiderMan"/>
     <Welcome name="Sara" surname="Super Women"/>
    <hr/> 
    <Hello/> */}
    
    <Message/>
    
  </div>)
  }
}
export default App