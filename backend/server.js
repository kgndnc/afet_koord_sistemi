const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000

const app = express()

// Middleware for sending data with the body of HTTP request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('Homepage')
})

app.use('/api/addresses', require('./routes/addressRoutes'))

// Use our error handler (override default express error handler)
app.use(errorHandler)

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})

