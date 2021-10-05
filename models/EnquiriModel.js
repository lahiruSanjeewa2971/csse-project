const mongoose = require('mongoose')

const EnquiriSchema = new mongoose.Schema({
    orderID:String,
  
    siteManager:String,
    enquiri:String,
    siteAddress:String
 
})

module.exports = mongoose.model("enquiridata",EnquiriSchema)