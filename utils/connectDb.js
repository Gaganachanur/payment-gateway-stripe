import mongoose from "mongoose";

 const connectmongo =async () =>{

mongoose.connect(process.env.Mongo_URL)

}

export default connectmongo;

