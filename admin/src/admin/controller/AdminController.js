const AdminUser = require("../model/AdminModel");
const env = require("dotenv").config({ path: "../../../.env" })
const jwtToken = require("jsonwebtoken")

module.exports = {
    async login(req,res){
        const data = req.body
        const response = {};
        try{
            //console.log("ok")
            const obj = await AdminUser.findOne({email:data.email})
            console.log(obj)
            const isPass = (data.password==obj.password)
            console.log(isPass)
            if(isPass){
                var tokenData = {
                    id: obj.id,
                    email: obj.email,
                }
                const secretKey = process.env.JWT_SECRET_KEY
                //console.log(secretKey)
                const token = jwtToken.sign(tokenData, secretKey, { expiresIn: "30d" })
               // console.log(token)
                response.status = "success"
                response.message = "login successfully"
                // response.body = tokenData
                response.token = token
            }
            else{
                response.status = "failed";
                response.message = "login failed"
            }
        }
        catch(err){
            response.status = "failed";
            response.message = "something wrong happened during login"
        }
        res.json(response)
    }

}