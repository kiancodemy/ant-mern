import express from "express";
import { connection } from "./DbConnection/connect.js";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import productrouter from "./router/admin/productRouter.js";
import cors from "cors";
import router from "./router/product.js";
import userrouter from "./router/userRouter.js";
const app = express();
dotenv.config();
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connection();

///router config

//corse config
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, //

    /*allowedHeaders: ["Content-Type", "Authorization"],*/
  })
);
app.use("/users", userrouter);
app.use("/admin", productrouter);
app.use("/products",router);

app.listen(process.env.PORT, () => {
  console.log("connected express");
});
