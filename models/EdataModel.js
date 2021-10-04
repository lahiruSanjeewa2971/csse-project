const mongoose = require('mongoose')

const EdataSchema = new mongoose.Schema({
    orderID:String,
    companyName:String,
    date:String,
    createrName:String,
    quantity:Number,
    description:String,
    items:String,
    deliveryAddress:String,
    status:{
        type: String,
        default:''
    }
})

module.exports = mongoose.model("edata",EdataSchema)