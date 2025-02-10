import React from 'react'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Product from './Product/Product'
import Notification from './Components/Notification'

const App = () => {
  return (
    <div>
      {/* <Provider store={store}>
        <h2>App Component</h2>
      <Message/>
      <hr/>
      <Product/>
      </Provider> */}
      <Notification type='success' message={"new notification"}/>
    </div>
  )
}

export default App
