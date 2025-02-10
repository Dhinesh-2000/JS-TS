import React from 'react'
import "./Notification.css"
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle } from "react-icons/ai"
const iconStyles={marginRight:"10px"}
const icons={
    success: <AiOutlineCheckCircle/>,
    info: <AiOutlineCloseCircle/>,
    warning: <AiOutlineInfoCircle/>,
    error: <AiOutlineCloseCircle/>
}

const Notification = ({type="info",message,onClose=()=>{}}) => {
  return (
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      <AiOutlineClose color='white' 
      className="closeBtn"
      onClick={()=>{onClose()}}/>
    </div>
  )
}

export default Notification
