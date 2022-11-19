import express from "express";
const router = express.Router();
import {
  createVideo,
  updateVideo,
  deleteVideo,
  getSingleVideo,
  addView,
  trendVideo,
  randomVideo,
  sub,
  getByTag,
  search,
} from "../controllers/video.controller.js";
import { verifyToken } from "../verifyToken.js";

// ##################

// CREATE VIDEO
// UPDATE VIDEO
// DELETE VIDEO
// GET SINGLE VIDEO
// ADD VIEW
// TREND
// RANDOM
// SUB
// GET BY TAG
// SEARCH

// ##################

// CREATE VIDEO
router.post("/", verifyToken, createVideo);

// UPDATE VIDEO
router.put("/:id", verifyToken, updateVideo);

// DELETE VIDEO
router.delete("/:id", verifyToken, deleteVideo);

// GET SINGLE VIDEO
router.get("/find/:id", getSingleVideo);

// INCREMENT VIEW
router.put("/view/:id", addView);

// TREND VIDEO
router.get("/trend", trendVideo);

// TREND VIDEO
router.get("/random", randomVideo);

// SUBSCRIBE all VIDEOS or channels
router.get("/sub", verifyToken, sub);

// GET BY TAGS USING QUERY
router.get("/tags", getByTag);

// SEARCH WITH QUERY || title
router.get("/search", search);

// export
export default router;
