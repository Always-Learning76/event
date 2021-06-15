const express = require('express')
const app = express()
const mongoose = require('mongoose')
const appointmentRoutes = require('./routes/appointmentRoutes.js')
const dbSetup = require('./database/setup.js')
const middle = require('./middlewares/authentication.js')
const authRoutes = require('./routes/authRoutes')
const port =  8003;

app.use(express.json());

dbSetup()

app.use(appointmentRoutes)
app.use(authRoutes)

const {seedAdmin} = require('./seeders/admin')


app.listen(port, () => {
 console.log("server is on")
})
