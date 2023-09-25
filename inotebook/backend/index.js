const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 3000;

//End node or points
app.get("/", (req, res) => {
  res.send("Hi Tayyab!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
