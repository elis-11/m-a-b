const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
}, 
{
	timestamps: true,
	versionKey: false,
	collection: "users"
})

const User = mongoose.model('user', userSchema);

module.exports = User;