const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    totalScore: { type: Number, default: 0 },
    prizes: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
