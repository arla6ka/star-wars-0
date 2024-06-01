const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Planet = require('./models/Planet');
const Character = require('./models/Character');
const Starship = require('./models/Starship');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;



app.use(cors({
    origin: ["https://star-wars-0-front.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.json("Hello");
})

app.get('/api/planets', async (req, res) => {
  try {
    const planets = await Planet.find();
    res.json(planets);
  } catch (error) {
    console.error('Error fetching planets:', error);
    res.status(500).send('Server Error');
  }
});


app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  try {
    const characters = await Character.find({ name: new RegExp(query, 'i') });
    const planets = await Planet.find({ name: new RegExp(query, 'i') });
    const starships = await Starship.find({ name: new RegExp(query, 'i') });
    res.json([...characters, ...planets, ...starships]);
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
