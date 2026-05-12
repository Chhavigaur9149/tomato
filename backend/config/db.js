import mongoose from "mongoose";
export const connectDB = async () => {

    await mongoose.connect("mongodb+srv://chhavigaur:9149005328@cluster0.w79iuev.mongodb.net/tomato").then(() => console.log("connected to database"))
      
    }
