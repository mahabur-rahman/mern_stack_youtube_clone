import express from "express";
const router = express.Router();
import { verifyToken } from "../verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/user.controller.js";

// ###############

// UPDATE
// DELETE
// GET A USER
// SUBSCRIBE
// UNSUBSCRIBE
// LIKE A VIDEO
// DISLIKE A VIDEO

// ###############

// UPDATE
router.put("/:id", verifyToken, updateUser);

// DELETE
router.delete("/:id", verifyToken, deleteUser);

// GET A USER
router.get("/find/:id", getUser);

// SUBSCRIBE
// UNSUBSCRIBE
// LIKE A VIDEO
// DISLIKE A VIDEO

// export

export default router;
