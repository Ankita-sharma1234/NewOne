const express = require('express');

const registrationroute = express.Router();

const { getregister, postregister, updateregister, deleteregister } = require('../Controller/registration.controller');

registrationroute.get('/viewregistration', getregister)
registrationroute.post('/addregistration', postregister)
registrationroute.put('/updateregistration/:h_registration_no', updateregister)
registrationroute.delete('/deleteregistration/:h_registration_no', deleteregister)


module.exports = { registrationroute }