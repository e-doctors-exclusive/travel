const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.getAllFlights = async (req, res) => {
    try {
        const getAll = await prisma.flights.findMany() 
        res.status(200).send(getAll)
    } catch (error) {
        throw new Error(error)
    }
};

module.exports.addFlight = async (req, res) => {

  try {
    const flight = await prisma.flights.create(
      {data:req.body}
    );
    res.status(201).json(flight.id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding flight' });
  }
};

module.exports.getFlights = async (req, res) => {
  try {
      const getAll = await prisma.flights.findMany(({ 
         include:{all:true},
          where: { destFrom: {OR:req.params.destFrom},
          destTo: {OR:req.params.destTo}  }, 
          dateFrom: {OR:req.params.dateFrom}}
          )) 
      res.status(200).send(getAll)
  } catch (error) {
      throw new Error(error)
  }
};

module.exports.findOneFlight = async (req, res) => {
  try {
    const flight = await prisma.flights.findUnique(req.params.idFind)
    const allSeats = await  flight.getSeats()
    const flightInfo = await prisma.flights.findUnique({where:{id:req.params.idFind}})
    res.status(200).send({flightInfo:flightInfo,flightSteats:allSeats});
  } catch (error) {
    throw new Error(error);
  }
};



module.exports.updateFlight = async (req, res) => {
  try {
    const update = await prisma.lights.update(req.body, {
      where: { id: req.params.idUpdate },
    });
    res.status(202).send(update);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.deleteFlight = async (req, res) => {
  try {
    const del = await prisma.Flights.delete({ where: { id: req.params.idDelete } });
    res.json(del);
  } catch (error) {
    throw new Error(error);
  }
};
