// in this module we will be learning about http module in node

// importing http module in node
import * as http from 'node:http';

const port = 3900;

// const server = http.createServer((req, res)=>{
//     res.status = 200;
//     res.setHeader('Content-Type', 'text/http');
//     res.end('<h1>This is Rajat Sharma here.</h1>');
// })

// server.listen(port, ()=>{
//     console.log(`Server is listening on port ${port}`);
// });

const server = http.createServer((request, response)=>{
    if(request.url === '/') response.end('home page');
    if(request.url === '/about') response.end('about page');
    else response.end('Page not found.');
});
server.listen(port,()=>{
    console.log(`server is listening at ${port}`);
});