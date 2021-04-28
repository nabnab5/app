const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./BabyData')

app.use(bodyParser.json())

const BabyData = mongoose.model("baby")


const mongoUri = "mongodb+srv://Achraf:WfNeC3Sb2t8HhqN@cluster0.ctmnt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongoo hhh")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})

app.get('/',(req,res)=>{
    BabyData.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
    
})


app.post('/send-data',(req,res)=>{
     const baby = new BabyData({
         name:req.body.name,
         gender:req.body.gender,
         weight:req.body.weight,
         picture:req.body.picture,
         birthday:req.body.birthday,
     })
     baby.save()
     .then(data=>{
         console.log(data)
         res.send(data)
     }).catch(err=>{
         console.log(err)
     })
     
})

app.post('/delete',(req,res)=>{
    BabyData.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

app.post('/update',(req,res)=>{
    BabyData.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        gender:req.body.gender,
        weight:req.body.weight,
        picture:req.body.picture,
        birthday:req.body.birthday,
    }).then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("server running")
})