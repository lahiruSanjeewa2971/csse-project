const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    accountName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 
    description: {
        type: String,
        required:true
    },
    accountPrice: {
        type: Number,
        default: 0
    },
    accountIncharge: {
        type: String,
    },
    status: {
        type: String,
        default: "Started"
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Accounts', SiteSchema)