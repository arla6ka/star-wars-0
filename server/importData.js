const mongoose = require('mongoose');
const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config();

const Planet = require('./models/Planet');
const Character = require('./models/Character');
const Starship = require('./models/Starship');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const fetchResidents = async (residentUrls) => {
  const residentPromises = residentUrls.map(url => axios.get(url).then(res => res.data.name));
  return Promise.all(residentPromises);
};


const importData = async () => {
  try {
  
    const planetResponse = await axios.get(`${process.env.SWAPI_BASE_URL}/planets/`);
    const planets = planetResponse.data.results;

    for (let planet of planets) {
      const residents = await fetchResidents(planet.residents);
      console.log(`Planet: ${planet.name}, Residents: ${residents}`); 
      await Planet.create({
        name: planet.name,
        climate: planet.climate,
        terrain: planet.terrain,
        population: planet.population,
        residents: residents 
      });
    }

    console.log('Planets imported');

  
    const characterResponse = await axios.get(`${process.env.SWAPI_BASE_URL}/people/`);
    const characters = characterResponse.data.results;
    await Character.insertMany(characters);
    console.log('Characters imported');

  
    const starshipResponse = await axios.get(`${process.env.SWAPI_BASE_URL}/starships/`);
    const starships = starshipResponse.data.results;
    await Starship.insertMany(starships);
    console.log('Starships imported');

    mongoose.disconnect();
  } catch (error) {
    console.error('Error importing data:', error);
  }
};


importData();
