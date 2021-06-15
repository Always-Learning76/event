const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = "secure secret"
const expiry = 3600

exports.registerNewUser = (req, res) => {
    User.findOne({username: req.body.username}, (err, existinguser) => {
        if(err) {
            return res.status(400).json({err})
        } if(existinguser) {
            return res.status(401).json({message: "duplicate username"})
        }
        User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            
        }, (err, newUser) => {
            if(err){
                return res.status(500).json({err})
            }
            bcrypt.gensalt(10, (err, salt) => {
                if(err) {
                    return res.status(500).json({err})
                }
                bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                    if(err) {
                        return res.status(500).json({err})
                    }
                    newUser.password = hashedPassword
                    newUser.save((err, savedUser) => {
                        if(err) {
                            return res.status(500).json({err})
                        }
                        jwt.sign({
                            id: newUser._id,
                            lastname: newUser.lastname,
                            firstname: newUser.firstname,
                            username: newUser.username,
                            role : newUser.role
                        }, (secret), {expiresIn : expiry}, (err, token) => {
                            if(err) {
                                return res.status(500).json({err})
                            }
                            return res.status(200).json({message : "registration successful", token})
                        })
                    })
                })
            })
        })
    })
}