import express from "express";
import {
  CreateProduct,
  UpdateProduct,
  AllProducts,
  deleteProduct,
} from "../../controler/admin/productControler.js";
import { addProduct } from "../../controler/admin/productControler.js";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { all } from "axios";
cloudinary.config({
  cloud_name: "dsegkejic",
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

///routers///
router.post("/send", upload.single("file"), addProduct);
router.post("/create", CreateProduct);
router.delete("/delete/:id", deleteProduct);
router.post("/update", UpdateProduct);
router.get("/AllProducts", AllProducts);
export default router;
