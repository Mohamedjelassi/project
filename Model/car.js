const mongoose = require("mongoose");

// schema

const Schema = mongoose.Schema;

// Create the UserAdmin
const carSchema = new Schema({
  marque: {
    type: String,
    required: true,
  },
  kilometrage: {
    type: String,
    required: true,
  },
  couleur: {
    type: String,
    required: true,
  },
  nombreDePlace: {
    type: String,
    required: true,
  },
  dateMiseDeCirulation: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
  },
  prix: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  carburant: {
    type: String,
    required: true,
  },
  disponibilite: {
    type: String,
  },
  img: {
    type: String,
  

  },
});

module.exports = Cars = mongoose.model("Cars", carSchema);
