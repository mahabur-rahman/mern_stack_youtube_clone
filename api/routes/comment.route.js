import express from "express";
const router = express.Router();

import { verifyToken } from "../verifyToken.js";
import {
  addComment,
  deleteComment,
  getAllComments,
} from "../controllers/comment.controller.js";

// #############

// ADD COMMENT
// DELETE COMMENT
// GET ALL COMMENTS

// #############

// ADD COMMENT
router.post("/", verifyToken, addComment);

// DELETE COMMENT
router.delete("/:id", verifyToken, deleteComment);

// GET ALL COMMENTS USING ID
router.get("/:videoId", getAllComments);

// export
export default router;
