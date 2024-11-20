import React,{Component} from "react"
import Greet from "./Components/Greet"
import Welcome from "./Components/Welcome"
import Hello from "./Components/Hello"
import Message from "./Components/Message"
import Counter from "./Components/Counter"
import FunctionClick from "./Components/FunctionClick"
import ClassClick from "./Components/ClassClick"
import EventBind from "./Components/EventBind"
import ParentComponent from "./Components/ParentComponent"

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
    <hr/>  */}
   {/* <Hello/> */}
     
    {/* <Message/> */}
    {/* <Counter/> */}
    {/* <FunctionClick/>
    <hr/>
    <ClassClick/> */}
    {/* <EventBind/> */}
    <ParentComponent/>
    
  </div>)
  }
}
export default App