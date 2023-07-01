const mongoose=require('mongoose')
//const dotenv =require('dotenv')
const express=require('express')
const router=require('./routes/blogRoute')
const cors=require('cors')
const PORT=process.env.PORT || 5000;
const app=express();


app.use(express.json())
app.use(cors())
app.use(router)

mongoose.connect('mongodb+srv://Vidisha:vidisha@cluster0.mgwgzxk.mongodb.net/hotel-rooms')
.then( ()=>
   console.log("Connected to mongo Successful")
)
.catch( (err) => 
console.log(console.log(err)
))


app.listen(PORT,()=>{console.log("server started")})