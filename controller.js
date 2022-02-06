const { getUrlData } = require("./ultils")

class Controller {
    async getCalculation(id, x, y) {
        try{
            switch (id) {
                case 1:
                    return  Promise.resolve(x + y)
                case 2:
                    return Promise.resolve(x - y)
                case 3:
                    return Promise.resolve(x * y)
                case 4:
                    return Promise.resolve(x / y)
            }  
        }
        catch(error){
            return Promise.reject(error)
        }
    }
}

module.exports = Controller