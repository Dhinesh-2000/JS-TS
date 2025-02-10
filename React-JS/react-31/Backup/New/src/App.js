import React,{useReducer} from 'react'
import ComponentC from './Components/ComponentC'
//import CounterOne from './Components/CounterOne'
//import CounterTwo from './Components/CounterTwo'
import CounterThree from './Components/CounterThree'
import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'
import DataFetchingOne from './Components/DataFetchingOne'
import DataFetchingTwo from './Components/DataFetchingTwo'
import ParentComponent from './CallBack/ParentComponent'
import Countermemo from './Components/Countermemo'
import FocusInput from './Components/FocusInput'
import ClassTimer from './Components/ClassTimer'
import HookTimer from './Components/HookTimer'
import DocTitleOne from './Custom-Hooks/DocTitleOne'
import DocTitleTwo from './Custom-Hooks/DocTitleTwo'
import CounterOne from './Custom-Hooks/CounterOne'
import CounterTwo from './Custom-Hooks/CounterTwo'
import UserForm from './Custom-Hooks/UserForm'
export const UserContext = React.createContext()
export const ChannelContext=React.createContext()

export const CountContext = React.createContext()

// const initialState=0
// const reducer=(state,action)=>{
//   switch(action){
//     case 'increment':
//         return state + 1
//     case 'decrement':
//         return state - 1
//     case 'reset':
//         return initialState
//     default:
//         return state

//   } 
// }
function App() {
  //const [count,dispatch]=useReducer(reducer,initialState)
  return (
    // <CountContext.Provider
    //  value={{countState: count, countDispatch: dispatch}}>
    <div className='App'>
      {/* <UserContext.Provider value={'Dhinesh'}>
        <ChannelContext.Provider value={'React Developer'}>
          <ComponentC/>
        </ChannelContext.Provider>
      
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* Count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <ParentComponent/> */}
      {/* <Countermemo/> */}
      {/* <FocusInput/> */}
      {/* <ClassTimer/>
      <HookTimer/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <CounterOne/>
      <CounterTwo/> */}
      <UserForm/>
     
    </div>
    // </CountContext.Provider>
  )
}

export default App
