require('dotenv').config()
const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('./models/EdataModel')
const EdataModel = mongoose.model("edata")
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//routes
app.use('/user', require('./routes/userRouter'));
app.use('/api', require('./routes/orderRouter'));

/////////Mobile part/////////////////
app.post('/send-data',(req,res) =>{
    const edataModel = new EdataModel({
        orderID:req.body.orderID,
        date:req.body.date,
        createrName:req.body.createrName,
        companyName:req.body.companyName,
        items:req.body.items,
        quantity:req.body.quantity,
        description:req.body.description,
        deliveryAddress:req.body.deliveryAddress,
        itemList:req.body.itemList

    })
    edataModel.save()
    .then(data=>{
        console.log(data)
        res.send("success")
    }).catch(err=>{
        console.log(err)
    })
   
})


//connect to DB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected MongoDB")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on PORT ', PORT)
})

