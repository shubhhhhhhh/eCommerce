require("../../config/DB")
const collection = require("../../config/Collection")
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    email:String,
    password:String
});

const AdminUser = mongoose.model(collection.Admin,AdminSchema);

module.exports = AdminUser;
