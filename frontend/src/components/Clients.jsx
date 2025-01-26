import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const Clients = ({connectToEx,sendMessage}) => {
    const [message,setMessage]=useState("");
    const handleChange=(e)=>{
        setMessage(e.target.value);
    }
  return (
    <>
    <button onClick={connectToEx}>connect with executive</button>
    <input type="text" onChange={handleChange} value={message}/>
    <button onClick={()=>{sendMessage(message)}}>send</button>
    </>
  )
}
