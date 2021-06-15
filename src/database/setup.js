const mongoose = require('mongoose');
const connectString = 'mongodb://localhost:27017/appointment'

module.exports = function() {
    mongoose.connect(connectString, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    },(err) => {
        if(err){
            console.log(err)
        } else {
            console.log("db is connected")
        }
    })
}


