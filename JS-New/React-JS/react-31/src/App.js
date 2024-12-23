import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Contacts/Contact'
let App=()=>{
    return <React.Fragment>
        <Router>
         <Navbar/> 
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/index" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>  
       </Router>


    </React.Fragment>    
}
export default App