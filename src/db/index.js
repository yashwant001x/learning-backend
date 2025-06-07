import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_DB = async ()=>{
    try {
        const DataBaseInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB host : ${DataBaseInstance.connection.host}`);
        
    } catch (error) {
        console.log("Mongo Db ERROR:", error);
        process.exit(1)
        
    }

}

export default connect_DB