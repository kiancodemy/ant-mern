import express from "express";
import { connection } from "./DbConnection/connect.js";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
app.use(cookieparser());
app.use(express.json());
connection();
app.use(
  cors({
    origin: process.env.clientUrl,
    Credential: true,
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.listen(process.env.PORT, () => {
  console.log("connected express");
});
