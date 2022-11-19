import express from "express";
const router = express.Router();
import { verifyToken } from "../verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unSubscribeUser,
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

// SUBSCRIBE CHANNEL
router.put("/sub/:id", verifyToken, subscribeUser);

// UNSUBSCRIBE CHANNEL
router.put("/unsub/:id", verifyToken, unSubscribeUser);

// LIKE A VIDEO
// DISLIKE A VIDEO

// export

export default router;
