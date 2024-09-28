import express from "express";
import {
  create,
  login,
  logout,
  middleware,
} from "../controler/usercontroler.js";
const router = express.Router();
router.post("/register", create);
router.post("/login", login);
router.post("/logout", logout);
router.post("/checkauth", middleware);

export default router;
