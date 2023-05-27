const asyncHandler = require('express-async-handler')

const Address = require('../models/addressModel')

// @desc    Get addresses
// @route   GET /api/addresses
// @access  Private (sadece yoneticiler)
const getAddresses = asyncHandler(async (req, res) => {
	const addresses = await Address.find()

	res.status(200).json(addresses)
})

// @desc    Create address
// @route   POST /api/addresses
// @access  Public
const createAddress = asyncHandler(async (req, res) => {
	// console.log(req.body)

	if (!req.body.address) {
		res.status(400)

		// Express error handler
		throw new Error('Please send required parameters (address)')
	}

	// Bu adres daha önce eklendiyse ekleme

	const existingAddress = await Address.findOne({
		il: req.body.address.il,
		ilce: req.body.address.ilce,
		mahalle: req.body.address.mahalle,
		'sokak/cadde': req.body.address['sokak/cadde'],
		no: req.body.address.no,
	})

	if (existingAddress) {
		// 409 Conflict
		res.status(409)
		throw new Error('Address already exists')
	} else {
		const address = await Address.create(req.body.address)
		res.status(201).json(address)
	}
})

// @desc    Update address
// @route   PUT /api/addresses/:id
// @access  Private (sadece yoneticiler)
const updateAddress = asyncHandler(async (req, res) => {
	const address = await Address.findById(req.params.id)

	if (!address) {
		res.status(404)
		throw new Error(`No address found with id ${req.params.id}`)
	}

	const updatedAddress = await Address.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ returnOriginal: false }
	)

	res.status(200).json(updatedAddress)
})

// @desc    Delete address
// @route   DELETE /api/addresses/:id
// @access  Private (sadece yoneticiler)
const deleteAddress = asyncHandler(async (req, res) => {
	const address = await Address.findById(req.params.id)

	if (!address) {
		res.status(404)
		throw new Error(`No address found with id ${req.params.id}`)
	}

	// This didn't work
	// await address.remove()

	await Address.findByIdAndDelete(req.params.id)

	res.status(200).json({ id: req.params.id })
})

module.exports = {
	getAddresses,
	createAddress,
	updateAddress,
	deleteAddress,
}

