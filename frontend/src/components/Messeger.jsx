import React from 'react'

export const Messeger = ({messages}) => {
    console.log(messages)
    return (
       <>
       <div>
        chat-box
       </div>
       <div>
        {
          messages.map((item)=>(
            // <div>{item.user}</div>
            item.user==="executive" ? <div style={{color:'blue'}}>{item.message}</div> :<div style={{color:'green'}}>{item.message}</div> 
    ))  
        }
        </div>
       </>
    )
}
