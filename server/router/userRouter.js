import express from "express";
import { create, login } from "../controler/usercontroler.js";
const router = express.Router();
router.post("/register", create);
router.post("/login", login);

export default router;
