const http = require("http")

const { getUrlData } = require("./ultils")
const Calculator = require('./controller')

const PORT = process.env.PORT || 5000

// GET api/calc/id/x/y
const server = http.createServer( async(req, res) => {
    if (req.url.match(/\/api\/calc\/[1-4]\/([0-9]+)\/([0-9]+)/)  && req.method === "GET") {
        const data = await getUrlData(req)
        const result = await new Calculator().getCalculation(data[0], data[1], data[2])
        
        res.writeHead(200, {"Content-type": "aplication/json"})
        res.write(JSON.stringify({result : `${result}`}))
        res.end()
    }
    else {
        res.writeHead(404, {"Content-type": "aplication/json"})
        res.end(JSON.stringify({message: "Route not found"}))
    }
})

server.listen(PORT, () => {
    console.log(`server started at localhost:${PORT}`)
})
