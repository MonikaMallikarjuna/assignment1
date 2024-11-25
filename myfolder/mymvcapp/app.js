const express = require("express")
const path=require("path")
const webRoute=require("./routes/webRoute")
const employeeRouter = require("./routes/empRoute")
const bodyParser = require('body-parser');
const globalErrorHandler = require("./utils/MyApiError")
const MyApiError = require("./utils/MyApiError")
const errorController = require("./controller/errorController")
const userRoute=require("./routes/userRoute")

const app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true })); 
app.set("view engine","ejs");
app.set("views", path.resolve("./views"));



app.use("/",userRoute)
app.use("/api/v1/employees/m",employeeRouter)
app.use("/api/v1/employees",webRoute)
// app.all("*",(req,res,next)=>{
   
//      next(new MyApiError(404,`${req.originalUrl} is not found.Api Error`))
// })
// handling exception using middleware
app.use(errorController.errorMiddleware)
module.exports = app