const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const singleFileSchema = new Schema(
  {
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
    dateCreation : {
      type: String,
    },
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SingleFile", singleFileSchema);
