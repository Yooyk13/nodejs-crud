const movieModel = require("../models/movieSchema");

const createMovie = async (req, res) => {
  const { movieName, year } = req.body;
  try {
    const newMovie = await movieModel.create({ movieName, year });
    res.send({
      newmovie: newMovie,
    });
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const results = await movieModel.find();
    res.send({
      status: "sucess",
      length: results.length,
      data: {
        data: results,
      },
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
};
const getMovie = async (req, res) => {
  const id = req.params.id;
  try {
    const results = await movieModel.findById({ _id: id });
    res.send({
      status: "sucess",
      data: {
        data: results,
      },
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
};
const updateMovie = async (req, res) => {
  const id = req.params.id;
  const { movieName, year } = req.body;
  try {
    const updatedMovie = await movieModel.findByIdAndUpdate(
      { _id: id },
      { movieName, year }
    );
    res.send({
      status: "updated",
      data: {
        data: updatedMovie,
      },
    });
  } catch (err) {
    res.send({
      status: "fail",
      message: err.message,
    });
  }
};
const deteleMovie = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedMovie = await movieModel.findByIdAndDelete({ _id: id });
    res.send({
      movie: "deleted",
    });
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deteleMovie,
};
