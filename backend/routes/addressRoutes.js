const express = require('express')
const router = express.Router()

const {
	getAddresses,
	createAddress,
	updateAddress,
	deleteAddress,
} = require('../controllers/addressController')

router.route('/').get(getAddresses).post(createAddress)

router.route('/:id').put(updateAddress).delete(deleteAddress)

module.exports = router

