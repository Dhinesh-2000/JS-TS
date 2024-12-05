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
import UserGreeting from "./Components/UserGreeting"
import NameList from "./Components/NameList"
import Stylesheet from "./Components/Stylesheet"
import Form from "./Components/Form"
import LifecycleA from "./Components/LifecycleA"
import FragmentDemo from "./Components/FragmentDemo"
import Table from "./Components/Table"
import PureComp from "./Components/PureComp"
import ParentComp from "./Components/ParentComp"
import RefsDemo from "./Components/RefsDemo"
import FocusInput from "./Components/FocusInput"
import FRParentInput from "./Components/FRParentInput"
import PortalDemo from "./Components/PortalDemo"
import Hero from "./Components/Hero"
import ErrorBoundary from "./Components/ErrorBoundary"
import ClickCounter from "./Components/ClickCounter"
import HoverCounter from "./Components/HoverCounter"
import ClickCounterTwo from "./Components/ClickCounterTwo"
import HoverCounterTwo from "./Components/HoverCounterTwo"
import User from "./Components/User"
import Counter1 from "./Components/Counter1"
import ComponentC from "./Components/ComponentC"
import { UserProvider } from "./Components/userContext"
import PostList from "./Components/PostList"
import PostForm from "./Components/PostForm"
import ClassCounter from "./Components/ClassCounter"
import HookCounter from "./Components/HookCounter"
import HookCounterTwo from "./Components/HookCounterTwo"
//import Inline from "./Components/Inline"

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
    {/* <ParentComponent/> */}
    {/* <UserGreeting/> */}
    {/* <NameList/> */}
    {/* <Stylesheet primary={true}/> */}
    {/* <Inline/> */}
    {/* <Form/> */}
    {/* <LifecycleA/> */}
    {/* <FragmentDemo/> */}
    {/* <Table/> */}
    {/* <PureComp/> */}
    {/* <ParentComp/> */}
    {/* <RefsDemo/> */}
    {/* <FocusInput/> */}
    {/* <FRParentInput/> */}
    {/* <PortalDemo/> */}
    {/* <ErrorBoundary>
     <Hero heroName="Batman"/>
     </ErrorBoundary>
     <ErrorBoundary>
     <Hero heroName="Superman"/>
     </ErrorBoundary>
     <ErrorBoundary>
     <Hero heroName="Joker"/>
    </ErrorBoundary> */}
    {/* <ClickCounter/>
    <HoverCounter/> */}
     {/* <ClickCounterTwo/>
     <HoverCounterTwo/>
     <User render={(isLoggedIn)=>isLoggedIn?'Dhinesh':'Guest'}/> */}
     {/* <Counter1>
      {(count,incrementCount)=>(
      <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )}
      </Counter1>
      <Counter1>
      {(count,incrementCount)=>(
       <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      )}
     </Counter1> */}
     {/* <UserProvider value="Dhinesh">
       <ComponentC/>
     </UserProvider> */}

     {/* <PostList/> */}
     {/* <PostForm/> */}
     {/* <ClassCounter/> */}
     {/* <HookCounter/> */}
     <HookCounterTwo/>


  </div>)
  }
}
export default App