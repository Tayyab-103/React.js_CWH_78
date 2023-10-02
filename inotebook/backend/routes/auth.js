const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//JWT signature work ya kisi ko dikhani nahi hy save rakhni hy privacy
const JWT_SECRET = 'TayyabisaGoodb$oy'

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
      // await is wajha sy kiya kiyu ky bcrypt promise return karta hy
      const salt = await bcrypt.genSalt(10);
      // secPass = bcrypt.hash(password, salt);
       const secPass = await bcrypt.hash(req.body.password, salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
// Data jo ky send karna hy
const data = {
  // jo koi bi token mujye wapis dy ga us ko is main bi convert kar saku ga
  user:{
    id: user.id
  }
}
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(jwtData)
      // send user:
      // res.json(user);

      // res.json({authToken: authToken});
      // use ES6 same work  
      res.json({authToken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured ");
    }
  }
);

module.exports = router;
