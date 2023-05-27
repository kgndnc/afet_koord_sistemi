const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
	res.send('Homepage')
})

app.use('/api/addresses', require('./routes/addressRoutes'))

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})

