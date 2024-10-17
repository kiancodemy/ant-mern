import express from "express";
import { createOrder } from "../controler/orderControler.js";
const router = express.Router();
router.post("/create", createOrder);

export default router;
