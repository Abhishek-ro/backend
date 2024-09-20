//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";
import {app} from './app.js'




dotenv.config({
    path:'./env'
})









connectDB()
.then(()=>{
    app.listen(process.env.PORT|| 8000, ()=>{
        console.log(`Server is ready at:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})

// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.DataBase_Connection}/${DB_Name}`)
//     }
//     catch(error){
//         console.error("Error:",error)
//     }
// })()
