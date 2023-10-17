const { Admin } = require("../database/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    let admin;
    if (email) {
      admin = await Admin.findOne({ where: { email } });
    } else {
      res.status(404).json({ message: "admin not found" });
    }
    bcrypt
      .compare(password, admin.password)
      .then((checked) => {
        if (checked) {
          const Token = jwt.sign(
            {
              adminId: admin.id,
              password: password,
            },
            "secret",
            { expiresIn: "24h" }
          );
          res.status(200).json({
            message: "login successful",
            admin: { ...admin, token: Token },
          });
        } else {
          res.status(403).json({ message: "wrong password" });
        }
      })
      .catch((e) => {
        res.status(404).json({ message: "error comparing password", e });
      });
  } catch (e) {
    res.status(404).json({ message: "cannot login", e });
  }
};

module.exports.createAdmin = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        Admin.create({
          name: name,
          email: email,
          password: hashedPassword,
        })
          .then((result) => {
            res.status(201).send({ message: " admin created successfully", result });
          })
          .catch((err) => {
            res.status(404).send({ message: "error creating admin", err });
          });
      })
      .catch((e) => {
        res.status(404).send({ message: "error hashing the password", e });
      });
  } catch (e) {
    throw e;
  }
};

module.exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll({});
    res.status(200).json(admins);
  } catch (error) {
    console.log(error);
  }
};
