const jwt = require("jsonwebtoken")
const secret = "secure secret"
exports.authenticationUser = (req, res, next) => {
    //check if auth token
    if(!req.headers.authorization){
        return res.status(500).json({message: "not authorized header required"})
    }
    next()

    const splittedHeader = req.headers.authorization.split(" ")

    if(splittedHeader[0] !== "Bearer") {
        return res.status(401).json({message: "not a valid authorization"})
    }
    const token = splittedHeader[1];
    jwt.verify(token, secret, (err, decodetoken) => {
        if(err) {
            return res.status(401).json({message: "not a valid authorization"})
        }
        if(!decodetoken) {
            return res.status(400).json({message: "invalid, please login"})   
        }
        req.user = decodetoken
        next()
    })
    }
    exports.checkAdmin = (req, res, next) => {
        if(req.user.role !== "admin") {
            return res.status(400).json({message : "not allowed"})
        }
        return next()


    }
    //decode token

