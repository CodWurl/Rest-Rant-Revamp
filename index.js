require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// 404 handler — must be LAST
app.use((req, res) => {
    res.status(404).send('404 Page')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
