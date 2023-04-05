const express = require('express');

const labsroute = express.Router();

const { getlabs,  postlabs, updatelabs, deletelabs  } = require('../Controller/labs.controller');

labsroute.get('/viewlab', getlabs)
labsroute.post('/addlab', postlabs)
labsroute.put('/updatelab/:lab_id',updatelabs)
labsroute.delete('/deletelab/:lab_id', deletelabs)
module.exports = { labsroute }