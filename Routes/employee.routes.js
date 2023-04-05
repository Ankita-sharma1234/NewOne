const express = require('express');

const employeeroute = express.Router();

const { getemployee, postemployee, updateemployee, deletemployee } = require('../Controller/employee.controller');

employeeroute.get('/viewemployee', getemployee)
employeeroute.post('/addemployee', postemployee)
employeeroute.put('/updateemployee/:employee_id', updateemployee)
employeeroute.delete('/deleteemployee/:employee_id', deletemployee)


module.exports = { employeeroute }