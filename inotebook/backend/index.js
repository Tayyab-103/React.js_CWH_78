const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 3000;

//End node or points
// app.get("/", (req, res) => {
//   res.send("Hi Tayyab!");
// });

//Available Routes:
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Not a Good Programmer Practice
// app.get("/api/v1/login", (req, res) => {
//   res.send("Hi Login Page!");
// });
// app.get("/api/v1/signup", (req, res) => {
//   res.send("Hi SignUp Page!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
