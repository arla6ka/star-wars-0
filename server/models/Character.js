const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  height: { type: String },
  mass: { type: String },
  hair_color: { type: String },
  skin_color: { type: String },
  eye_color: { type: String },
  birth_year: { type: String },
  gender: { type: String }
});

module.exports = mongoose.model('Character', CharacterSchema);
