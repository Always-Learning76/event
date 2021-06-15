const User = require('../models/user')
const bcrypt = require('bcryptjs')
let password = "pass123"

exports.seedAdmin = () => {
    User.findOne({role : admin}, (err, admin) => {
        if(err) throw err 
        if (admin)
        {
            return "admin already exists"
        }
        User.create({
            firstname : "Jane",
            lastname : "Doe",
            username : "janedoe",
            role : "admin"
        }, (err, admin) => {
            if(err) throw err
            bcrypt.genSalt(10, (err, salt) => {
                if(err) throw err
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err
                    user.password = hash;
                    user.save((err, savedUser) => {
                        if (err) throw err
                        return "admin created"
                    })
                })
            })
    })
    })
}