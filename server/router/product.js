import express from "express";
import { All, ProductById, carousel } from "../controler/productscontroler.js";
const router = express.Router();
router.get("/AllProductss", All);
router.get("/ProductById/:id", ProductById);
router.get("/carousel", carousel);

export default router;
