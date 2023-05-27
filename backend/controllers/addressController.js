// @desc    Get addresses
// @route   GET /api/addresses
// @access  Private (sadece yoneticiler)
const getAddresses = (req, res) => {
	res.status(200).json({ message: 'Get addresses' })
}

// @desc    Create address
// @route   POST /api/addresses
// @access  Public
const createAddress = (req, res) => {
	console.log(req.body)

	res.status(200).json({ message: 'Create address' })
}

// @desc    Update address
// @route   PUT /api/addresses/:id
// @access  Private (sadece yoneticiler)
const updateAddress = (req, res) => {
	res.status(200).json({ message: `Update address id: ${req.params.id}` })
}

// @desc    Delete address
// @route   DELETE /api/addresses
// @access  Private (sadece yoneticiler)
const deleteAddress = (req, res) => {
	res.status(200).json({ message: `Delete address id: ${req.params.id}` })
}

module.exports = {
	getAddresses,
	createAddress,
	updateAddress,
	deleteAddress,
}

