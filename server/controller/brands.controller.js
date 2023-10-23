const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
 // Add ,update, getAll, and delete methods 
module.exports = {
    getAll : async (req,res)=> {
        try {
            const result = await prisma.brands.findMany()
            res.status(200).json(result)
        } catch (error) {
            throw error
        }
    },
    login: async (req, res) => {
        try {
          const { email } = req.body;
          let brand;
          if (email) {
            brand = await prisma.brands.findUnique({ where: { email } });
          } else {
            res.status(404).json({ message: "brand not found" });
          }
      
          if (!brand) {
            return res.status(404).json({ message: "brand not found" });
          }
      
          const Token = jwt.sign(
            {
              brandId: brand.id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "24h" }
          );
          res.status(200).json({
            message: "login successful",
            brand: { id: brand.id, email: brand.email, token: Token },
          });
        } catch (e) {
          console.error(e);
          res.status(500).json({ message: "cannot login", e });
        }
      },
      
      
    add: async (req, res) => {
        try {
            const result = await prisma.brands.create({
                data: {
                  name: req.body.name || null,
                  email: req.body.email,
                  description: req.body.description ||null,
                  image: req.body.image ||null,
                  rating: 0, // provide a value for rating here
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              });
              
            res.status(201).json(result);
        } catch (error) {
            throw error;
        }
    },
    deletee : async (req, res) =>{
        try {
            const result = await prisma.brands.delete({where : { id: parseInt(req.params.id) }})
            res.json(result)
        } catch (error) {
            throw error 
        }
    },
    updatee: async (req, res) => {
        try {
            const result = await prisma.brands.update({
                where: { id: parseInt(req.params.id) },
                data: req.body
            });
            res.json(result);
        } catch (error) {
            throw error;
        }
    }
  
 
 
};
