const env = require("dotenv").config({path:"../../.env"})
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("cloud vala mongo connect ho gya!")
}).catch((err)=>{
    console.log("mongo k saath lol ho gya.")
})
