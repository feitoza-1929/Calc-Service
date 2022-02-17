const { getUrlData } = require("./ultils")

class Controller {
    getCalculation(id, x, y) {
        try{
            switch (id) {
                case 1:
                    return  x + y
                case 2:
                    return x - y
                case 3:
                    return x * y
                case 4:
                    return x / y
            }  
        }
        catch(error){
            return error
        }
    }
}

module.exports = Controller