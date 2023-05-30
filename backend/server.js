const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

// Middleware for sending data with the body of HTTP request
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const REQUEST_DOMAIN = '*'
// const REQUEST_DOMAIN = "http://localhost:3000/"

// For CORS error
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', REQUEST_DOMAIN) // update to match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})

app.get('/', (req, res) => {
	res.send('Homepage')
})

app.use('/api/addresses', require('./routes/addressRoutes'))

// Use our error handler (override default express error handler)
app.use(errorHandler)

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})

