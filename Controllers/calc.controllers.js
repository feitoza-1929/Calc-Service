const SchemaValidate = require('../Schema/calc.schema').validate 

const calc = (req, res) => {
        if(SchemaValidate(req.body)){
            const body = req.body
            console.log(body)
            let result = 0
            
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
                    res.status(400).json({message : "no valid operator"})
            }
    } 
    else {
        res.status(400).json({message : "invalid schema"})
    }
    
}

module.exports = {calc}