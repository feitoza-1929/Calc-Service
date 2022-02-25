const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')

const port = process.env.PORT || 3005

const calcRouter = require('./Routes/calc.routes')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',calcRouter)

app.listen(port, () => console.log(`listenning at ${port}`))