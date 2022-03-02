const ajv = require('../Schema/ajvInstance')

const CalcSchema = {
    type: "object",
    properties: {
        values: {
            type: "array",
            items: [{type: "number"},{type: "number"}],
            minItems: 2,
            additionalItems: false
        },
        operator: {
            type: "string",
        }
    }
}

const validate = ajv.compile(CalcSchema)

module.exports = {CalcSchema, validate}