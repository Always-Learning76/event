
const mongoose = require('mongoose')
const appointmentsSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    category : String,
    description :String,
    time: Number
})

const Appointment = mongoose.model('appointment', appointmentsSchema)
module.exports = Appointment;