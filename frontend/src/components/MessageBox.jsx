import React from 'react'

export const MessageBox = ({ messages, executive }) => {

    return (
        <div className="chat-messages">
            {
                messages.map((item,index) => (
                    <div className='message-bubble' key={index} style={{
                        backgroundColor: item.messageBy==="user" ? "#d3d3d3":"#dcf8c6", alignSelf: item.messageBy==="user" ? "flex-end":"flex-start",
                    }} >{item.message}</div> 
                ))
            }
        </div>
    )
}
