const express=require("express")
const app =express()
const connectDB = require("./config/connectDB")
//midlewer
app.use(express.json())
//connectDB
connectDB()
//route
app.use("/contacts",require("./routes/contact"))


//run server
const port = process.env.PORT||5000
app.listen(port,err=>err? console.log("erreur"):console.log(`serveur is runing on port ${port}`))