"use strict";

var SchemaValidate = require('../Schema/calc.schema').validate;

var SchemaCalc = require('../Schema/calc.schema').CalcSchema;

var calc = function calc(req, res) {
  var result;
  var body;

  if (SchemaValidate(req.body)) {
    body = req.body;
    console.log(body);

    switch (body.operator) {
      case "+":
        result = body.values[0] + body.values[1];
        res.status(200).json({
          result: result
        });
        break;

      case "-":
        result = body.values[0] - body.values[1];
        res.status(200).json({
          result: result
        });
        break;

      case "*":
        result = body.values[0] * body.values[1];
        res.status(200).json({
          result: result
        });
        break;

      case "/":
        result = body.values[0] / body.values[1];
        res.status(200).json({
          result: result
        });
        break;

      case "%":
        result = body.values[0] % body.values[1];
        res.status(200).json({
          result: result
        });
        break;

      default:
        res.status(400).json({
          message: "invalid operator"
        });
    }
  } else {
    res.status(400).json({
      message: "invalid schema"
    });
  }
};

module.exports = {
  calc: calc
};
//# sourceMappingURL=calc.controllers.js.map