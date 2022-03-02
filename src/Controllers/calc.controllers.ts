const SchemaValidate = require('../Schema/calc.schema').validate 
const SchemaCalc = require('../Schema/calc.schema').CalcSchema

import { IBody } from "./calc.controller.types"

const calc = (req, res): void => {
    let result: number
    let body: IBody
    
    if(SchemaValidate(req.body)){
        body = req.body
        console.log(body)
        
        switch (body.operator) {
            case "+":
                result = body.values[0] + body.values[1]
                res.status(200).json({result : result})
                break
            case "-":
                result = body.values[0] - body.values[1]
                res.status(200).json({result : result})
                break
            case "*":
                result = body.values[0] * body.values[1]
                res.status(200).json({result : result})
                break
            case "/":
                result = body.values[0] / body.values[1]
                res.status(200).json({result : result})
                break
            case "%":
                result = body.values[0] % body.values[1]
                res.status(200).json({result : result})
                break
            default:
                res.status(400).json({message : "invalid operator"})
        }
    } 
    else {
        res.status(400).json({message : "invalid schema"})
    }
    
}

module.exports = {calc}