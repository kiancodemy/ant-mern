import express from "express";
import {
  create,
  login,
  logout,
  updateUser,
  middleware,
} from "../controler/usercontroler.js";
const router = express.Router();
router.post("/register", create);
router.post("/login", login);
router.get("/logout", logout);
router.post("/updateUser/:id", updateUser);
router.post("/checkauth", middleware);

export default router;
