import React,{useState} from 'react'


export const Executive = ({sendMessage}) => {

    const [message,setMessage]=useState("");
    const handleChange=(e)=>{
        setMessage(e.target.value);
    }
  return (
    <>
    <input type="text" onChange={handleChange} value={message} />
    <button onClick={()=>{sendMessage(message)}}>send</button>
</>
  )
}
