import express from "express";
import { All } from "../controler/productscontroler.js";
const router = express.Router();
router.get("/AllProductss",All);


export default router;
