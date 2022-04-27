const mongoose = require('mongoose');

// Schema
const posts = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			minLength: 5,
		},
		text: {
			type: String,
			required: true,
			minLength: 5,
		},
		author: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Posts', posts);