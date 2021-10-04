const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    vehicleID: {
        type: String,
        required: true,
        unique: true
    },
    vehicleName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Available"
    },
    images: {
        type: Object
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerMobile: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Vehicles", vehicleSchema)