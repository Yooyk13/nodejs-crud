const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const router = require("./routers/movieRouter");

require("dotenv").config();

app.use(express.json());

const Port = process.env.PORT || 3000;

const connectDb = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected successfully");
  } catch (err) {
    console.log("db connection failed");
  }
};

connectDb();

app.use("/api/v1/", router);

app.listen(Port, () => {
  console.log(`server is listening at port ${Port}...`);
});
