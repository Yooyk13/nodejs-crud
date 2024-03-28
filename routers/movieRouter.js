const express = require("express");
const {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deteleMovie,
} = require("../controllers/movieController");
const router = express.Router();

router.get("/allmovies", getAllMovies);
router.get("/getmovie/:id", getMovie);
router.post("/createmovie/", createMovie);
router.patch("/updatemovie/:id", updateMovie);
router.delete("/deletemovie/:id", deteleMovie);

module.exports = router;
