const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
 // Add  and getAll methods 
module.exports = {
  getAllRating: async (req, res) => {
    try {
      const getAll = await prisma.rating.findMany({
        where: { flightId: +req.params.id },
      });
      res.status(200).send(getAll);
    } catch (error) {
      throw new Error(error);
    }
  },
  addrating: async (req, res) => {
    try {
      const rating = await prisma.rating.create({ data: req.body });
      res.json(rating);
    } catch (error) {
      throw error;
    }
  },
};
