const mongoose = require('mongoose')

const driver = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        validator: {
            validate: (email) => { email.length > 2 },
            message: 'Invalid email'
        }
    },
    driving: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Driver', driver)