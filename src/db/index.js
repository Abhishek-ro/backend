import mongoose from "mongoose"
import {DB_Name} from "../constants.js"

const connectDB =async()=>{
    try {
        const connectionInsttance=await mongoose.connect(`${process.env.DataBase_Connection}/${DB_Name}`)
        console.log(connectionInsttance.connection.host)
    } catch(error){
        console.log("Mongoose connection error", error);
        process.exit(1)
    }
} 

export default connectDB;