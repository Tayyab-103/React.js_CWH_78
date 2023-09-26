const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//User Duplication removed in DataBase
const User = mongoose.model("user", UserSchema);
//in mongodb index file create  so thats why not use
// User.createIndexes();
module.exports = User;
