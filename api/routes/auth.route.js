import express from "express";
const router = express.Router();
import { signUp, login, googleAuth } from "../controllers/auth.controller.js";

// ###############

// CREATE USER
// SIGN IN USER
// GOOGLE AUTH

// ###############

// CREATE USER
router.post("/register", signUp);

// SIGN IN USER
router.post("/login", login);

// GOOGLE AUTH
router.post("/google", googleAuth);

// export
export default router;
