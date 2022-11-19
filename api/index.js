import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import cookieParser from "cookie-parser";

// ROUTE
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import videoRoute from "./routes/video.route.js";
import commentRoute from "./routes/comment.route.js";

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

// middle wares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comments", commentRoute);

// ERROR HANDING
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// listen app
app.listen(PORT, () => {
  // invoke connect function
  connect();

  console.log(`server is running at http://localhost:${PORT}`);
});
