

import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'

import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'






const app= express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())
//coonect to database
connectDB();
//api end point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)


app.get('/',(req,res)=> {
    res.send("api working")
})


app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})

//mongodb+srv://chhavigaur:9149005328@cluster0.w79iuev.mongodb.net/?appName=Cluster0