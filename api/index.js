import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";

const app = express();

// dotenv config
dotenv.config();
const PORT = process.env.PORT || 5000;

// connected db
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`mongoDB connected`.cyan.underline);
    })
    .catch((err) => {
      throw err;
    });
};

// listen app
app.listen(PORT, () => {
  // invoke connect function
  connect();

  console.log(`server is running at http://localhost:${PORT}`);
});
