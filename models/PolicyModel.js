const mongoose = require('mongoose')

const PolicySchema = new mongoose.Schema({
    policyID: {
        type: String,
        required: true,
        unique: true
    },
    topic: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Policies', PolicySchema)