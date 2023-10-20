const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = {
getAllFlights : async (req, res) => {
  try {
      const getAll = await prisma.flights.findMany({
        include : {
          brands : true,
          seats : true
        }
      }) 
      res.status(200).send(getAll)
  } catch (error) {
      throw new Error(error)
  }
},

addFlight : async (req, res) => {
  try {
      console.log(req.body);
      const flight = await prisma.flights.create({data:req.body})
      res.json(flight)
    } catch (error) {
      throw error 
    }

  // try {
  //   const flight = await prisma.flights.create({
  //     data:req.body
  //   });
  //   res.status(201).json(flight);
  // } catch (error) {
  //   // res.json({ message: 'Error adding flight' });
  //   throw error 
  // }
},
getFlights : async (req, res) => {
    try {
        const getAll = await prisma.flights.findMany(({ 
          //  include:{all:true},
            where: { destFrom: req.params.destFrom,
            destTo: req.params.destTo  , 
            dateFrom: req.params.dateFro}
             } )) 
        res.status(200).send(getAll)
    } catch (error) {
        throw new Error(error)
    }
},
findOneFlight : async (req, res) => {
  try {
    const flightId = parseInt(req.params.idFind);
    const flight = await prisma.flights.findUnique(req.params.idFind)
    const allSeats = await  flight.getSeats()
    const flightInfo = await prisma.flights.findUnique({where:{id:flightId}})
    res.status(200).send({flightInfo:flightInfo,flightSteats:allSeats});
  } catch (error) {
console.log(error);  }
},
updateFlight : async (req, res) => {
  try {
    const flightId = parseInt(req.params.idUpdate);
        const flightData = req.body;
    const update = await prisma.lights.update(flightData, {
      where: { id: flightId },
    });
    res.status(202).send(update);
  } catch (error) {
    throw new Error(error);
  }
},

deleteFlight : async (req, res) => {
  try {
    flightId = parseInt(req.params.idDelete);
    const del = await prisma.Flights.delete({ where: { id: req.params.idDelete } });
    res.json(del);
  } catch (error) {
    throw new Error(error);
  }
}
}