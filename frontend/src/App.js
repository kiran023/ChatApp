import { useEffect, useRef, useState } from "react";
import io from 'socket.io-client';
import { ChattingBox } from "./components/ChattingBox";
const socket = io('https://chatapp-backend-jgdx.onrender.com');




function App() {
  const [executive, setExecutive] = useState(false)
  const [user, setUser] = useState("")
  const [messages, setMessages] = useState([]);
  const [signalExecutive, setSignalExecutive] = useState(false);
  const [executiveConnected, setExecutiveConnected] = useState(false);
  const roomNameRef=useRef();
  const handleNewMessage = (message) => {
    console.log("NewMessagexyz", message);
    setMessages((prev) => [...prev, message]);
  };
  const handleConnectedExecutive=(message)=>{
    setExecutiveConnected(true);
  }
  useEffect(() => {
    const handleConnectToEx = (roomIdentifier) => {
      if(!roomNameRef.current){
        roomNameRef.current=roomIdentifier;
      }
    };
    if (executive && roomNameRef.current && !signalExecutive) {
      console.log(roomNameRef.current)
      alert("connect with client");
      setSignalExecutive(true);
      socket.emit("connectWithCustomer", roomNameRef.current);
    }

    // socket.on("NewMessage", handleNewMessage);
    socket.on("connectWithCustomer", handleConnectToEx);
    socket.on("executiveConnected",handleConnectedExecutive)

    console.log("Setting up socket listeners...");
    socket.on("NewMessage", handleNewMessage);

    return () => {
        console.log("Cleaning up socket listeners...");
        socket.off("NewMessage", handleNewMessage);
      socket.off("connectWithCustomer", handleConnectToEx);
    };

  }, [executive]);
  const connectToEx = () => {
    roomNameRef.current=`room_${user}`
    socket.emit("connectWithEx", `room_${user}`);
  }

  const sendMessage = (message) => {
      socket.emit("newMessage", [roomNameRef.current,message])
  }
  const userLogin = () => {
    setUser(`user${Date.now()}`);
  }
  const exLogin = () => {
    setExecutive(true);
  }

  return (
    <div className="App">
      <ChattingBox connectToEx={connectToEx} messages={messages} executive={executive}  userLogin={userLogin} user={user} exLogin={exLogin} signalExecutive={signalExecutive} sendMessage={sendMessage} handleNewMessage={handleNewMessage} executiveConnected={executiveConnected}/>
    </div>
  );
}

export default App;
