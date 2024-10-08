import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app= express() 
app.use(cors({
    origin:process.env.Cors_Origin,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended:true,limit: "16kb"}))

app.use(express.static("Public"))


app.use(cookieParser())

import { router } from "../src/routes/user.route.js"

app.use("/api/v1/users",router)

export { app } 