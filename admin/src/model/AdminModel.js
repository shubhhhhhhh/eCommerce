require("../config/DB")
const collection = require("../config/Collection")
const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    name:{type:String,required:[true,"name is required in field"]},
    email:{type:String,unique:[true],required:[true,"email is required in field"]},
    password:{type:String,required:[true,"password is required in field"],minLength:1}
});

const AdminUser = mongoose.model(collection.Admin,AdminSchema);

module.exports = AdminUser;
