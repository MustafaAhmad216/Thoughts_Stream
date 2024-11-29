const Validator = require("fastest-validator");
const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const existingUser = await models.User.findOne({
    where: { email: req.body.email },
  });

  if (existingUser) {
    return res.status(409).json({ message: "Email already exists" });
  }

  bcryptjs.genSalt(12, (err, salt) => {
    bcryptjs.hash(req.body.password, salt, async (err, hash) => {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
      };

      const newUser = await models.User.create(user);
      if (newUser) {
        res.status(201).json({
          message: "User created successfully",
          data: newUser,
        });
      }
    });
  });
};
