import express from "express";
import { All, ProductById } from "../controler/productscontroler.js";
const router = express.Router();
router.get("/AllProductss", All);
router.get("/ProductById/:id", ProductById);

export default router;
