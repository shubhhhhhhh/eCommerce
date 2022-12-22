const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");

app.use(express.json());   
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use((req,res,next)=>{                                           
    res.setHeader("Access-Control-Allow-Origin","*")                                //allows request having instructed headers
    res.setHeader("Access-Control-Allow-Method","GET,POST,PUT,DELETE,OPTIONS")
    res.setHeader("Access-Control-Allow-Headers","Content-Type")
    res.setHeader("Access-Control-Allow-Credentials",true)
    next();
})
app.use('/images',express.static(__dirname + '/public/upload/'))
app.use("/admin",(req,res)=>{
    res.json({status:"working"})
})

module.exports = app;