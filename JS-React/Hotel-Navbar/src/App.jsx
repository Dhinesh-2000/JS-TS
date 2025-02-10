import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from "./Components/Home"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Stays from './Components/Stays'
import Admin from './Components/Admin'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {
 

  return (
    <div className='grid min-h-screen grid-rows-[auto_lfr_auto] 
    bg-gradient-to-br from -purple-300 via-blue-100 to-pink-300'>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/stays' element={<Stays/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/login' element={<Login/>} />          
          <Route path='/profile' element={<Profile/>} />          

        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
