
const express = require('express');
const router = express.Router()
const Appointment = require('../models/appointmentSchema')
const appointmentCtlr = require('../controllers/appointmentControllers')
const apptcontroller = require('../controllers/appointmentControllers')

const {authenticationUser, checkAdmin} = require ('../middlewares/authentication.js')

router.post('/appointment', apptcontroller.createNewAppointment, authenticationUser, checkAdmin)
router.get('/appointment', apptcontroller.fetchAppointment, authenticationUser) 
router.get('/appointment/:id', apptcontroller.fetchAppointment)     
router.put('/appointment/:id', apptcontroller.updateAppointment, authenticationUser) 
             

module.exports = router