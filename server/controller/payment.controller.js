const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = {
  getAll: async (req, res) => {
    try {
      const all = await prisma.payments.findMany();
      res.json(all);
    } catch (error) {
      throw error;
    }
  },
  getById: async (req, res) => {
    try {
      const all = await prisma.payments.findMany({where : { id: parseInt(req.params.id) }});
      res.json(all);
    } catch (error) {
      throw error;
    }
  },
  add: async (req, res) => {
    try {
      await prisma.payments.create({data:req.body});
      res.json({
        status: "success",
        message: "Payment added successfully!!!",
        data: null,
      });
    } catch (err) {
      throw err;
    }
  },
};
