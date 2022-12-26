require("../../config/DB");
const mongoose = require("mongoose");
const collection = require("../../config/Collection");

const ProductSchema = new mongoose.Schema({
    category : {
        type:String,
        required:true
    },
    sub_category: {
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    desc:{
        type:String
    }
})

const ProductData = mongoose.model(collection.Product,ProductSchema);

module.exports = ProductData;