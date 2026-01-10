import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client"



const server = new WebSocketServer({
    port:3001
});


server.on("connection", (socket) => {
    prismaClient.users.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    
    socket.send("Hi there you are connected to the server")
})