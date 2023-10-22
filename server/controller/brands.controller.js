const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
 // Add ,update, getAll, and delete methods 
module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await prisma.brands.findMany();
      res.status(200).json(result);
    } catch (error) {
      throw error;
    }
  },
  add: async (req, res) => {
    try {
      const result = await prisma.brands.create({
        data: req.body,
      });
      res.status(201).json(result);
    } catch (error) {
      throw error;
    }
  },
  deletee: async (req, res) => {
    try {
      const result = await prisma.brands.delete({
        where: { id: parseInt(req.params.id) },
      });
      res.json(result);
    } catch (error) {
      throw error;
    }
  },
  updatee: async (req, res) => {
    try {
      const result = await prisma.brands.update({
        where: { id: parseInt(req.params.id) },
        data: req.body,
      });
      res.json(result);
    } catch (error) {
      throw error;
    }
  },
};
