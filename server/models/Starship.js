const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StarshipSchema = new Schema({
  name: { type: String, required: true },
  model: { type: String },
  manufacturer: { type: String },
  cost_in_credits: { type: String },
  length: { type: String },
  max_atmosphering_speed: { type: String },
  crew: { type: String },
  passengers: { type: String },
  cargo_capacity: { type: String },
  consumables: { type: String },
  hyperdrive_rating: { type: String },
  MGLT: { type: String },
  starship_class: { type: String }
});

module.exports = mongoose.model('Starship', StarshipSchema);
