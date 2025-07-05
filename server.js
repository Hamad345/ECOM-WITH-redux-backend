 const express =require('express');
 const mongoose =require('mongoose')
 const cookieParser=require('cookie-parser')
 const cors=require("cors")
 const authRouter =require("./routes/auth/auth-routes")
mongoose.connect('mongodb+srv://hamadkhan:hamadKhan654321@cluster0.krc9k.mongodb.net/').then(()=>console.log("connected")).catch((error)=>console.log(error))
 const app=express();
 const PORT = process.env.PORT || 5000
 {};
 app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET','POST',"DELETE","PUT"],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials:true
    })
 )
 app.use(cookieParser());
 app.use(express.json());
 app.use("/api/auth",authRouter)
//  /api/auth/registerUser ->registerUser
//  /api/auth/login ->loginUser
 app.listen(PORT,()=>console.log("server is now running"))