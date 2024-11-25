const app = require("./app")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({path:"./config.env"})

const port = process.env.PORT || 3000

mongoose.connect(
    process.env.DB_LOCAL_URL
).then(con=>{
    console.log("Connection done successfully")
}).catch(err=>{
     console.log("Connection failed",err)
})

app.listen(port,()=>{
    console.log(`Mymvc app server is running ${port}`)
})