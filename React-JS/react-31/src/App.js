import React from 'react'
import ComponentC from './Components/ComponentC'
import CounterOne from './Components/CounterOne'
import CounterTwo from './Components/CounterTwo'
export const UserContext = React.createContext()
export const ChannelContext=React.createContext()
function App() {
  return (
    <div className='App'>
      {/* <UserContext.Provider value={'Dhinesh'}>
        <ChannelContext.Provider value={'React Developer'}>
          <ComponentC/>
        </ChannelContext.Provider>
      
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      <CounterTwo/>
     
    </div>
  )
}

export default App
