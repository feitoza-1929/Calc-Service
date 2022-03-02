"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var express = require('express');

var app = express();

var cors = require('cors');

var bodyParser = require('body-parser');

var port = process.env.PORT || 3005;

var calcRouter = require('./Routes/calc.routes');

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', calcRouter);
module.exports = app.listen(port);
//# sourceMappingURL=app.js.map