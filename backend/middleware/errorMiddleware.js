// Middleware are functions that execute during request-response cycle

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode ?? 500

	res.status(statusCode)

	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
	})
}

module.exports = { errorHandler }

