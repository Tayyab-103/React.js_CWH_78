const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    a: "This",
    Number: 34,
  };

//   res.send(obj);
  res.json(obj);
});

module.exports = router;
