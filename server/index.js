const express = require('express')
const app = express()
const cors = require('cors')

// route
const noteRoute = require('./route/noteRooute')

// Database
const db = require('./db/db')
db()

// port
const port = process.env.PORT || 8000

// cors
app.use(cors())

// json parser
app.use(express.json())

app.get('/', (req,res) => {
    res.send('hello express')
})

// route
app.use('/', noteRoute)


app.listen(port, () => {
    console.log('server started on port: ', port);
})