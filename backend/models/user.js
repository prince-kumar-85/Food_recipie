const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {  // Fixed the typo here
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
