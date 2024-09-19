const net=require('net');


const client=net.createConnection({port:8080},()=>{
    console.log("client connect");
    client.write("hello from node client"); 
});

client.on('data',(data)=>{
    console.log("printing  data",data.toString());
})

