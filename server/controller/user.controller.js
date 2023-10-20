const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.signup = async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.users.create({
      data: {
        name,
        email: email || null,
        password: hashedPassword,
        phone: phone || null
      },
    })
    res.status(201).json({ message: 'User created successfully', result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating user', error });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { phone, email, password } = req.body;
    let user;
    if (phone) {
      user = await prisma.users.findUnique({ where: { phone } });
    } else if (email) {
      user = await prisma.users.findUnique({ where: { email } });
    } else {
      res.status(404).json({ message: "user not found" });
    }

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    bcrypt
      .compare(password, user.password)
      .then((checked) => {
        if (checked) {
          const Token = jwt.sign(
            {
              userId: user.id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "24h" }
          );
          res.status(200).json({
            message: "login successful",
            user: { id: user.id, email: user.email, token: Token },
          });
        } else {
          res.status(403).json({ message: "wrong password" });
        }
      })
      .catch((e) => {
        console.error(e);
        res.status(500).json({ message: "error comparing password", e });
      });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "cannot login", e });
  }
};


module.exports.getAll = async (req, res) => {
  try {
    const getAll = await prisma.users.findMany();
    res.status(200).send(getAll);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const user = await prisma.users.update({ where: { id: parseInt(req.params.id) },
    data: req.body}
     
    );
    res.json(user);
  } catch (e) {
    res.status(404).json({ message: "error updating", e });
  }
};

module.exports.updateStatusUser = async (req, res) => {
  try {
    const updateStatus = await prisma.users.update({ where: { id: parseInt(req.params.id) },
    data: {
      status: req.status,
    }},
     
    );
    res.json(updateStatus);
  } catch (e) {
    res.json({ message: "error updating", e });
  }
};

module.exports.deleted = async (req, res) => {
  try {
    const user = await prisma.users.delete({ where: { id:parseInt( req.params.id) } });
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: "error deleting", error });
  }
};
module.exports.getOne = async (req, res) => {
  const bearerToken = req.headers.authorization;
  if (bearerToken && bearerToken.startsWith("Bearer ")) {
    const token = bearerToken.split(" ")[1];
    console.log(token);
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log("hi decoded", decoded);
      const currentuser = await prisma.users.findUnique({
        where: {
          id: decoded.userId}
        });

      res.json(currentuser);
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized" });
    }
  } else {
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports.accessStatus= async (req, res) => {
  try {
    const user = await prisma.users.update({ where: { id: parseInt(req.params.id) },
    data:{
      status:false
    }}
     
    );
    res.json(user);
  } catch (e) {
    res.status(404).json({ message: "error updating", e });
  }
};