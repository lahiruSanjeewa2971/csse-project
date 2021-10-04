const mongoose = require('mongoose')

const SiteSchema = new mongoose.Schema({
    siteName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    location: {
        type: String,
        required:true,
        unique: true
    },
    description: {
        type: String,
        required:true
    },
    estimatePrice: {
        type: Number,
        default: 0
    },
    siteManager: {
        type: String,
    },
    status: {
        type: String,
        default: "Started"
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Sites', SiteSchema)