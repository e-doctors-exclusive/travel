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
  getById: async (req, res) => {
    try {
      const all = await prisma.reservations.findMany({
        include:{all:true , nested:true},
        where: {
          userId: req.params.userId,
        },
      });
      res.json(all);
    } catch (error) {
      throw error;
    }
  },

  updateById: async (req, res) => {
    try {
      await prisma.reservations.update(req.body, { where: { id: req.params.reser } });
      res.json({
        status: "success",
        message: "Reservation updated successfully!!!",
        data: null,
      });
    } catch (err) {
      next(err);
    }
  },

  deleteById: async (req, res, next) => {
    try {
      await prisma.reservations.delete({ where: { id: req.params.reser } });
      res.json({
        status: "success",
        message: "Reservation deleted successfully!!!",
        data: null,
      });
    } catch (err) {
      next(err);
    }
  },
  add: async (req, res) => {
    try {
      await prisma. reservations.create(req.body);
      res.json({
        status: "success",
        message: "Reservation added successfully!!!",
        data: null,
      });
    } catch (err) {
      throw err;
    }
  },
};
