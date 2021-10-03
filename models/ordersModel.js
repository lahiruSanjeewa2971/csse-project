const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    orderid:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },    
    title:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true
    },
    itemList:{
        type: Array,
        default: []
    }
}, {
    timestamps:true
})

module.exports = mongoose.model("Orders", OrdersSchema)