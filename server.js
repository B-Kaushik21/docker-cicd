const express = require('express');
const app=express();
const port=env.appPort || 3000;

const server=app.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello Docker+CI/CD');
});

server.listen(port,()=> console.log(`Server running on port ${port}`));
