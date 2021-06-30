const path = require('path');
const express = require('express')
require('dotenv').config()

require('./src/db/mongoose')
const carRouter = require('./src/routers/car')

var cors = require('cors')

const app = express()


const port = process.env.PORT || 3001

app.use(cors());
app.use(express.json())

app.use(carRouter)

app.use(express.static(path.join(__dirname, '../web-task/build')));

app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')));

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})