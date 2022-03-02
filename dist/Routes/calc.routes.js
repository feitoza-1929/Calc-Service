"use strict";

var express = require('express');

var router = express.Router();

var calcControllers = require('../Controllers/calc.controllers');

router.post('/calc', calcControllers.calc);
module.exports = router;
//# sourceMappingURL=calc.routes.js.map