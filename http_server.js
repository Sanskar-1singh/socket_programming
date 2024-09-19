const http=require('http');

const server=http.createServer((req,res)=>{
   console.log("new connection is created");
   if(req.url=="/home"){
     res.end("welcome home"); 
   }
   else{
    res.end("something something");
   }
   //console.log(req);
});

server.listen(3000,()=>{
    console.log("server started at port 3000");
});
