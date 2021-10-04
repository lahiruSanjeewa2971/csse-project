const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./EdataModel')

//test
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

//test 2

app.use(bodyParser.json())

const EdataModel = mongoose.model("edata")
const mongoUri = "mongodb+srv://lahiru:exnfn5firszdh6p9@cluster0.fht9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//password= exnfn5firszdh6p9
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
})

mongoose.connection.on("connected", ()=>{
    console.log("connected to mongo db")
})

// mongoose.connection.on("error",(err)=>{
//     console.log("error",err)
// })

app.get('/',(req,res)=>{
    res.send("welcome you")
})

app.post('/send-data',(req,res) =>{
    const edataModel = new EdataModel({
        orderID:req.body.orderID,
        date:req.body.date,
        createrName:req.body.createrName,
        items:req.body.items

    })
    edataModel.save()
    .then(data=>{
        console.log(data)
        res.send("success")
    }).catch(err=>{
        console.log(err)
    })
   
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})