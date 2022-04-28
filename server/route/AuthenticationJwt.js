const Users = require("../models/user")
const jwt = require("jsonwebtoken")

const jwtAuthentication = async(req, res,nxt) => {
    const { token } = req.cookies
    if (!token) {
        return res.status(400).json({
            massage:"login first"
        })
    }
    const decodeData = jwt.verify(token, "lalit@1994")
    req.user = await Users.findById(decodeData.id)
    nxt()

    



}
module.exports = jwtAuthentication