const express = require('express');

const ownerroute = express.Router();

const { getowner, postowner ,updateowner, deleteowner } = require('../Controller/owner.controller');

ownerroute.get('/viewowner', getowner)
ownerroute.post('/addowner', postowner)
ownerroute.put('/updateowner/:h_owner_id', updateowner)
ownerroute.delete('/deleteowner/:h_owner_id', deleteowner)


module.exports = { ownerroute }