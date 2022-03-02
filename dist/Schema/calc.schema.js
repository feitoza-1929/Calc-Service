"use strict";

var ajv = require('../Schema/ajvInstance');

var CalcSchema = {
  type: "object",
  properties: {
    values: {
      type: "array",
      items: [{
        type: "number"
      }, {
        type: "number"
      }],
      minItems: 2,
      additionalItems: false
    },
    operator: {
      type: "string"
    }
  }
};
var validate = ajv.compile(CalcSchema);
module.exports = {
  CalcSchema: CalcSchema,
  validate: validate
};
//# sourceMappingURL=calc.schema.js.map