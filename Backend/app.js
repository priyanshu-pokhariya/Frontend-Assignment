const express = require("express");
const cors = require("cors");
const razorpayInstance =  require("./razorpay");
const app = express();
app.use(cors());
app.use(express.json());

require("dotenv").config({path:"./Config/config.env"});

app.get("/",(req,res)=>{
    res.send("Jatin")
})
app.get("/apiKey",(req,res)=>{
    res.json(process.env.RAZORPAY_KEY_ID);
})
app.post("/createOrder",(req,res)=>{
 const {amount,currency} = req.body;
 razorpayInstance.orders.create({amount,currency},(err,order)=>{
    if(!err)
    res.json(order);
    else
    res.json(err);

 })
})
app.listen(4000,()=>{
    console.log("Server started at Port 4000")
    console.log(process.env.PORT)
});

