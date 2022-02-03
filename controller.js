class Controller {
    getCalculation(id, x, y) {
        switch (id) {
            case 1:
                return x + y
            case 2:
                return x - y
            case 3:
                return x * y
            case 4:
                return (x / y).toFixed(2)

        }  
    }
}

module.exports = Controller