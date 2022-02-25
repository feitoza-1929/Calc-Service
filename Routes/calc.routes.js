const express = require('express')
const router = express.Router()
const calcControllers = require('../Controllers/calc.controllers')


router.post('/calc', calcControllers.calc)

module.exports = router