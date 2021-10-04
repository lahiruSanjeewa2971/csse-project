const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
    role: {
        type: Number,
        default: 0
    },
    images:{
        type: Object,
        default: []
    },
    designation: {
        type: String,
    },
    phone: {
        type: Number,
    }, 
    gender: {
        type: String,
    },
    cart: {
        type: Array,
        default: []
    },
    status: {
        type: String,
        default: "Available"
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Users', UserSchema)