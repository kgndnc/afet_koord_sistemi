const mongoose = require('mongoose')

const addressSchema = mongoose.Schema(
	{
		il: {
			type: String,
			required: [true, 'Please add `il` value'],
		},
		ilce: {
			type: String,
			required: [true, 'Please add `ilce` value'],
		},

		mahalle: {
			type: String,
			required: [true, 'Please add `mahalle` value'],
		},

		'sokak/cadde': {
			type: String,
			required: [true, 'Please add `sokak/cadde` value'],
		},

		no: {
			type: String,
			required: [true, 'Please add `no` value'],
		},

		ulasildi: {
			type: Boolean,
			default: false,
		},

		'ek aciklamalar': {
			type: String,
			required: false,
			default: '',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Address', addressSchema)

