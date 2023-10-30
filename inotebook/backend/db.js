 const mongoose = require('mongoose');
 const mongoURI =
   "mongodb+srv://tayyabhameed103:tayyabhameed103@cwh-45.diw2r3p.mongodb.net/inotebook?retryWrites=true&w=majority";

 mongoose.set("strictQuery", false);

 const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to MongoDB Successfully");
    })
 }

 module.exports = connectToMongo;