const bcrypt = require("bcrypt");
const { CreditCard } = require("../database/index");

module.exports = {
  getAll: async (req, res) => {
    try {
      const creditCards = await CreditCard.findAll();
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

      const add = await CreditCard.create(creditCardData);

      res.status(201).json({ message: "Credit card added successfully", add });
    } catch (error) {
      res.status(500).json({ message: "Error adding credit card", error });
    }
  },
  // Add update, getOne, and delete methods if needed
};
