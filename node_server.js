
const net=require('net');

//this is used  to create a socket object>>>
const server=net.createServer((socket)=>{
        
    socket.on('data',(data)=>{
        console.log("data recieved from client",data.toString());  
        socket.write("thankyou");
    })
});

//net module is smart enough that it we  run server on machine it automatically fetch ip of that machine so we dont need to pass it manually

// this is used to bind socket object to specific port and ip address  and then it automatically start listening for client>>
server.listen(8080,()=>{
    console.log("new server is up at 8080");
});