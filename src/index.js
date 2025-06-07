// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connect_DB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connect_DB()



















/*
const app = express()
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error' , (error)=>{
            console.log('error',error);
            throw error
        })
        
        app.listen(`${process.env.PORT} ` , ()=>{
            console.log(`Port is : ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR:", error);  
    }
})()*/