const mongoose = require('mongoose')

const EdataSchema = new mongoose.Schema({
    orderID:String,
    date:String,
    createrName:String,
    items:String
})

module.exports = mongoose.model("edata",EdataSchema)