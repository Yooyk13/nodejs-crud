const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
