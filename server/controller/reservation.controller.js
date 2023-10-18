const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  getAll: async (req, res) => {
    try {
      const all = await prisma.reservations.findMany();
      res.json(all);
    } catch (error) {
      throw error;
    }
  },
  add: async (req, res) => {
    try {
      await prisma. reservations.create({data:req.body});
      res.json({
        status: "success",
        message: "Reservation added successfully!!!",
       
      });
    } catch (error) {
      throw error;
    }
  },

  updateById: async (req, res) => {
    try {
      await prisma.reservations.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
    });
      res.json({
        status: "success",
        message: "Reservation updated successfully!!!",
       
      });
    } catch (error) {
      throw(error);
    }
  },

  deleteById: async (req, res, next) => {
    try {
      await prisma.reservations.delete({ where: { id: parseInt(req.params.id )} });
      res.json({
        status: "success",
        message: "Reservation deleted successfully!!!",
       
      });
    } catch (error) {
      throw(error);
    }
  },
  getById: async (req, res) => {
    try {
      const all = await prisma.reservations.findMany({
        include:{all:true },
        where: { id: parseInt(req.params.id )} 
        
      });
      res.status(200).json(all);
    } catch (error) {
      throw error;
    }
  }
}
