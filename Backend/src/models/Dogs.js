const { Schema, model } = require("mongoose");

const newDog = new Schema({
  name: {
    type: String,
  },
  breed: {
    type: String,
  },
  weight: {
    type: Number,
  },
  temperament: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Dogs = model("Dogs", newDog);

module.exports = Dogs;
