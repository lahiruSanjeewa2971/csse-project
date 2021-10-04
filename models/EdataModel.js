const mongoose = require('mongoose')

const EdataSchema = new mongoose.Schema({
    orderID:String,
  
    date:String,
    createrName:String,
    companyName:String,
    quantity:Number,
    description:String,
    // items:String,
    deliveryAddress:String,
    status:{
        type: String,
        default:''
    },
    itemList:{
        type: Array,
        // default:[],
        name:String,
        amount:Number
    }
})

module.exports = mongoose.model("edata",EdataSchema)