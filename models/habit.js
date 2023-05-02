//this is the schema for the Habit daily tracking daily activity
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const habitSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	user: {
		//this will refer to the userSchema
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	tracking: [
		{
			date: {
				type: String,
				require: true,
			},
			status: {
				type: String,
				default: "none",
			},
		},
	],
});

const habit = mongoose.model('Habit',habitSchema);

module.exports = habit;