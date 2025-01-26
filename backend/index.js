const express= require('express');
const {createServer}=require('http');
const {Server}=require('socket.io');
const cors = require('cors');


const app= express();
const port= process.env.PORT || 9000;
app.use(cors());
const server=createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://chatapp-frontend-eze5.onrender.com/", // Allow requests from your frontend
        methods: ["GET", "POST"],       // Allowed HTTP methods
    },
});

io.on('connection',(socket)=>{
    console.log("a user connected",socket.id);  // agar io pr koi connection hoga then this function we be called
    socket.on("connectWithEx", (roomName) => {
        socket.join(roomName);
        console.log(`User joined room: ${roomName}`);
        io.emit("connectWithCustomer", roomName);
    });
    
    socket.on("connectWithCustomer", (roomName) => {
        socket.join(roomName);
        socket.broadcast.to(roomName).emit("executiveConnected","true")
        console.log(`Executive joined room: ${roomName}`);
    });

    socket.on("newMessage",(response) => {
        if (!response[0]) {
            console.error("Room name not provided for message",roomName);
            return;
        }
        console.log("New Message Received:", response);
        socket.broadcast.to(response[0]).emit("NewMessage", { messageBy: "sender", message:response[1] });
    })
})
app.get('/',(req,res)=>{
    console.log("started");
    res.send("working");

})
server.listen(port,()=>{
    console.log("server started");
})