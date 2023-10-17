const { Seats } = require("../database/index");

const letters = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F" };

function seatsGenerater(x, flightId) {
  let seats = [];
  let numOfRows = x / 6;
  for (let i = 1; i <= numOfRows; i++) {
    for (key in letters) {
      seats.push({
        availble: true,
        type: "Economic",
        name: i + "" + letters[key],
        FlightId: flightId,
      });
    }
  }
  return seats;
}

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Seats.findAll({});
      res.json(result);
    } catch (error) {
      throw error;
    }
  },

  add: async (req, res) => {
    try {
      const flightId = req.body.FlightId;
      const numberOfSeats = req.body.numberOfSeats;
      const initialSeats = seatsGenerater(numberOfSeats, flightId);
      console.log(initialSeats);
      const result = await Seats.bulkCreate(initialSeats);
      res.json(result);
    } catch (error) {
      throw error;
    }
  },

  updatee: async (req, res) => {
    try {
      const result = await Seats.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(result);
    } catch (error) {
      throw error;
    }
  },
};