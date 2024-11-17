const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://complaint:complaint@complaint.zwu0i.mongodb.net/?retryWrites=true&w=majority&appName=complaint")
.then(()=>{
   console.log("connected to mongodb")
})