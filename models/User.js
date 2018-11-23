const mongoose = requre('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		trim: true,
		required: "Username is required."
	},
	kudos: [{
		type: Schema.Types.ObjectId,
		ref: 'Kudo'
	}]
})

const User = mongoose.mode('User', UserSchema);

module.exports = User;