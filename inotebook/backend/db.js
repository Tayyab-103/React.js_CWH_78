const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to MongoDB Successfully");
  });
};

module.exports = connectToMongo;
