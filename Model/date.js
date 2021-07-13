const mongoose = require("mongoose");

// schema

const Schema = mongoose.Schema;

// Create the ClientAdmin
const dateSchema = new Schema({
  lieu: {
    type: String,
    required: true,
  },
  dateF: {
    type: String,
    required: true,
  },
  dateS: {
    type: String,
    required: true,
  },
});

module.exports = date = mongoose.model("date", dateSchema);
