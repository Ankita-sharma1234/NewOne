const express = require('express')
const labsroute = express.Router()

const { gettest, posttest, patchtest, deletetest } = require('../Controller/lab_test.controller')

testroute.get('/viewtest', gettest)
testroute.post('/addtest', posttest)
testroute.update('/updatetest', patchtest)
testroute.delete('./delete', deletetest)

module.exports = { testroute }