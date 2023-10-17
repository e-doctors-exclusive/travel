app.get('/', async (req, res)=> {

    const options = {
        method: 'GET',
        url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights',
        params: {
          sourceAirportCode: 'SFO',
          destinationAirportCode: 'ATL',
          date: '2023-10-11',
          itineraryType: 'ROUND_TRIP',
          sortOrder: 'PRICE',
          numAdults: '1',   
          numSeniors: '0',
          classOfService: 'BUSINESS',
          pageNumber: '2',
          currencyCode: 'USD'
        },
        headers: {
          'X-RapidAPI-Key': 'e3ca96d0d1msh0206f2382667021p19a78cjsn30162cf7c383',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        } 
      };
      try {
        const response = await axios.request(options);
       res.send(response.data.data.flights);
    } catch (error) {
        console.error(error);
    }
});


app.get('/all', async (req, res)=> {
const options = {
  method: 'GET',
  url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',
  params: {query: 'london'},
  headers: {
    'X-RapidAPI-Key': 'e3ca96d0d1msh0206f2382667021p19a78cjsn30162cf7c383',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	res.send(response.data.data.map((e)=>{
        return  e.airportCode
    }));
} catch (error) {
	console.error(error);
}
});