const mongoose = require("mongoose");

// schema

const Schema = mongoose.Schema;

// Create the ClientAdmin
const clientSchema = new Schema({
  lieu: {
    type: String,
    required: true,
  },
  DateFirst: {
    type: String,
    required: true,
  },
  DateSceonde: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  Civilite: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  telf: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  avis: {
    type: String,
    required: true,
  },
  refresrvation: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

module.exports = client = mongoose.model("client", clientSchema);
