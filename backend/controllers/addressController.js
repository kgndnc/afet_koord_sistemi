const asyncHandler = require('express-async-handler')

// @desc    Get addresses
// @route   GET /api/addresses
// @access  Private (sadece yoneticiler)
const getAddresses = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Get addresses' })
})

// @desc    Create address
// @route   POST /api/addresses
// @access  Public
const createAddress = asyncHandler(async (req, res) => {
	console.log(req.body)

	if (!req.body.address) {
		res.status(400)

		// Express error handler
		throw new Error('Please send required parameters (address)')
	}

	res.status(200).json({ message: 'Create address' })
})

// @desc    Update address
// @route   PUT /api/addresses/:id
// @access  Private (sadece yoneticiler)
const updateAddress = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update address id: ${req.params.id}` })
})

// @desc    Delete address
// @route   DELETE /api/addresses
// @access  Private (sadece yoneticiler)
const deleteAddress = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete address id: ${req.params.id}` })
})

module.exports = {
	getAddresses,
	createAddress,
	updateAddress,
	deleteAddress,
}

