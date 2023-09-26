const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//create a user using : POST "/api/auth/createuser". No Login required
// express validator npm use in [conditions]
router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password Must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // request ki body main kuch bi bejha gaya hy woh main nikal saqta hu
    // console.log(req.body);

    // const user = User(req.body);
    // user.save();
    // if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // express validator
    // Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this emailalready exists" });
      }
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured ")
    }
  }
);

module.exports = router;
