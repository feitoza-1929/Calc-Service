const http = require("http")
const url = require("url")

const { getUrlData } = require("./ultils")
const Todo = require('./controller')

const PORT = process.env.PORT || 5000

// GET api/calc/id/x/y
const server = http.createServer( async(req, res) => {
    const route = /\/api\/calc\/[1-4]\/([0-9]+)\/([0-9]+)/
    if (req.url.match(route)  && req.method === "GET") {

        const values = getUrlData(url.parse(req.url, true).path)
        const result = await new Todo().getCalculation(values[0], values[1], values[2])

        res.writeHead(200, {"Content-type": "aplication/json"})
        res.write(JSON.stringify({result : result}))
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