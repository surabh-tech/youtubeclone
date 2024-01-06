import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async() =>{
    try{
        const connectiont = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`mongobdconnected : ${connectiont.connection}`)
    }catch(error){
        console.log("error in db connection",error)
    }
}
export default connectdb;