const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
var cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

//End node or points
// app.get("/", (req, res) => {
//   res.send("Hi Tayyab!");
// });

// if you use req.body then use middelware
app.use(express.json());
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
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
