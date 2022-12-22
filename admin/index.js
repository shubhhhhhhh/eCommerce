const env = require("dotenv").config({path:".env"});
const host = process.env.HOST;
const port = process.env.port;
const server = require("./app.js");

server.listen(port,host,()=>{
    console.log(`server is running at http://${host}:${port}/`)
})