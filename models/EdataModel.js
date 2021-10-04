const mongoose = require('mongoose')

const EdataSchema = new mongoose.Schema({
    orderID:String,
    date:String,
    createrName:String,
    items:String,
    deliveryAddress:String,
    status:{
        type: String,
        default:''
    }
})

module.exports = mongoose.model("edata",EdataSchema)