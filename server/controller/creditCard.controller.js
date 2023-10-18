const bcrypt = require("bcrypt");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  getAll: async (req, res) => {
    try {
      const creditCards = await prisma.creditcards.findMany();
      res.status(200).json(creditCards);
    } catch (error) {
      res.status(500).json({ message: "Error fetching credit cards", error });
    }
  },
  addCreditCard: async (req, res) => {
    try {
      const { cardName, cardNumber, expirationDate, cvv } = req.body;

      if (!cardName || !cardNumber || !expirationDate || !cvv) {
        return res.status(400).json({ message: "Invalid card information" });
      }

      const hashedCardNumber = await bcrypt.hash(cardNumber, 10);
      const hashedCVV = await bcrypt.hash(cvv, 10);

      const creditCardData = {
        cardName,
        cardNumber: hashedCardNumber,
        expirationDate,
        cvv: hashedCVV,
      };

      const add = await prisma.creditcards.create( {data: creditCardData});

      res.status(201).json({ message: "Credit card added successfully", add });
    } catch (error) {
      res.status(500).json({ message: "Error adding credit card", error });
    }
  },
  // Add update, getOne, and delete methods if needed
};
