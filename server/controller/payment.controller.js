const { Payments } = require("../database/index.js");
module.exports = {
  getAll: async (req, res) => {
    try {
      const all = await Payments.findAll();
      res.json(all);
    } catch (error) {
      throw error;
    }
  },
  getById: async (req, res) => {
    try {
      const all = await Payments.findAll({
        where: {
          userId: req.params.userid,
        },
      });
      res.json(all);
    } catch (error) {
      throw error;
    }
  },
  add: async (req, res) => {
    try {
      await Product.create(req.body);
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
