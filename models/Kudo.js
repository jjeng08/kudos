const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kudoSchema = new Schema({
	title: {
		type:String,
		trim: true,
		required: 'Title required.'
	},
	receiver:{
		type: String,
		trim: true,
		required: "Recipient must be included."
	},
	body: {
		type: String,
		trim: true,
		required: 'You actually have to give some kudos. Come on, son!'
	}
})