const { Flights } = require("../database/index.js")

const { Op } = require("sequelize")

module.exports.getFlights = async (req, res) => {
    try {
        const getAll = await Flights.findAll(({ 
           include:{all:true},
            where: { destFrom: {[Op.like]:req.params.destFrom},
            destTo: {[Op.like]:req.params.destTo}  }, 
            dateFrom: {[Op.like]:req.params.dateFrom}}
            )) 
        res.status(200).send(getAll)
    } catch (error) {
        throw new Error(error)
    }
};
module.exports.getAllFlights = async (req, res) => {
    try {
        const getAll = await Flights.findAll({}) 
        res.status(200).send(getAll)
    } catch (error) {
        throw new Error(error)
    }
};










module.exports.findOneFlight = async (req, res) => {
  try {
    const flight = await Flights.findByPk(req.params.idFind)
    const allSeats = await  flight.getSeats()
    const flightInfo = await Flights.findOne({where:{id:req.params.idFind}})
    res.status(200).send({flightInfo:flightInfo,flightSteats:allSeats});
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.addFlight = async (req, res) => {

  try {
    const flight = await Flights.create(
      req.body
    );
    res.status(201).json(flight.id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding flight' });
  }
};

module.exports.updateFlight = async (req, res) => {
  try {
    const update = await Flights.update(req.body, {
      where: { id: req.params.idUpdate },
    });
    res.status(202).send(update);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.deleteFlight = async (req, res) => {
  try {
    const del = await Flights.destroy({ where: { id: req.params.idDelete } });
    res.json(del);
  } catch (error) {
    throw new Error(error);
  }
};
