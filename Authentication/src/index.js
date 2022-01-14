const express= require('express')
const signup=require('./routes/signup')



const app=express()
app.use(express.json())
app.use(signup)



app.listen(3000,()=>{
    console.log("authentication service started")
})

