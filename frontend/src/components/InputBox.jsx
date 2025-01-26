import React, { useState } from 'react'

export const InputBox = ({sendMessage,handleNewMessage}) => {
    const [message,setMessage]=useState("")
    const handleSend = () => {
        sendMessage(message);
        handleNewMessage({"messageBy":"user", "message":message})
          setMessage("");
      };
      
  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="chat-input"
      />
      <button onClick={handleSend} className="send-button">
        Send
      </button>
    </div>
  )
}
