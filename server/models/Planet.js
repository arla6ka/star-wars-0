const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
  name: { type: String, required: true },
  climate: { type: String, required: true },
  terrain: { type: String, required: true },
  population: { type: String },
  residents: [{ type: String }] 
});

module.exports = mongoose.model('Planet', PlanetSchema);
