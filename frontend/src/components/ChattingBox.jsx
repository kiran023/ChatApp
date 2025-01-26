import React, { useEffect, useState } from 'react'
import '../App.css'
import { MessageBox } from './MessageBox';
import { InputBox } from './InputBox';

export const ChattingBox = ({connectToEx,messages,executive,userLogin,exLogin,signalExecutive,sendMessage,user,handleNewMessage,executiveConnected}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
    const clickOn=()=>{
        toggleModal();
        // if(isOpen===true && executive==false)
            connectToEx();
    }
    useEffect(()=>{
        if(signalExecutive===true){
            toggleModal();
        }
    },[signalExecutive])
    
  return (
    <div>
      {user && <button onClick={clickOn} className="open-button">
      Connected with Executive
    </button>}
    {(!user && !executive) && <div>
    <button onClick={userLogin}>login as user</button>
    <button onClick={exLogin}>login as executive</button>
    </div>}
    <div className={`modal-container ${isOpen ? "active" : ""}`}>
      <button className="close-button" onClick={toggleModal}>
        ×
      </button>
      <div className="modal-content">
        <MessageBox messages={messages} executive={executive}/>
        { user ? (executiveConnected ? <InputBox sendMessage={sendMessage} handleNewMessage={handleNewMessage} executive={executive}/>: <div>Please wait while executive connect</div>) :
        <InputBox sendMessage={sendMessage} handleNewMessage={handleNewMessage} executive={executive}/>
        }
         
      </div>
    </div>
  </div>
  )
}
