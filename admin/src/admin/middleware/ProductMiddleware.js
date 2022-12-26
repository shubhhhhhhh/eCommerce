require("dotenv").config({ path: "../../../.env" });
const jwt = require("jsonwebtoken");

module.exports = {
    verifyToken(request, response, next) {
        try {
            const secretToken = process.env.JWT_SECRET_KEY;
            const token = request.headers["authorization"].split(" ")[1];
            const verify = jwt.verify(token,secretToken)
            // console.log(verify)
            if(verify){
                // request.body.id = verify.id
                // request.body.email = verify.email;
                // console.log(request.body)
                next()
            }
        } catch (error) {
            response.status(401).json({status:"failed",message:"unauthorized ! Access Token was expired"})
        }
    }
}