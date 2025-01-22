const express = require ("express")
const mongoose = require ("mongoose")
const bodyParser = require ("body-parser")
const cors = require ("cors")
require("dotenv").config()
const app = express()


const PORT = process.env.PORT||5555


app.use(cors())
app.use(bodyParser.json())

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{})

const connection = mongoose.connection

connection.once("open",()=>{
    console.log("Mongodb Connection Success!!!!!")
})

const ItemsRouter = require("./routes/Items.js")
app.use("/Item",ItemsRouter)


app.listen(PORT,()=>{
    console.log(`Server is up and running on ${PORT}`)
})