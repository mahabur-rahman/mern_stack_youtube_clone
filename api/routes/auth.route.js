import express from "express";
const router = express.Router();
import { signUp, login } from "../controllers/auth.controller.js";

// ###############

// CREATE USER
// SIGN IN USER
// GOOGLE AUTH

// ###############

// CREATE USER
router.post("/register", signUp);
// SIGN IN USER
router.post("/login", login);

// export
export default router;
