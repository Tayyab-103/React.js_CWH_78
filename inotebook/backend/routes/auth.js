const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//create a user using : POST "/api/auth/". Doesn't require Auth
// express validator npm use in [conditions]
router.post(
  "/",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password Must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    // request ki body main kuch bi bejha gaya hy woh main nikal saqta hu
    // console.log(req.body);

    // const user = User(req.body);
    // user.save();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // express validator 
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({ error: "please enter a unique value for email", message: err.message });
      });
  });

module.exports = router;
