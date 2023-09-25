const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
 

  //   res.send(obj);
  res.json([]);
});

module.exports = router;
