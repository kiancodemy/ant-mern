import express from "express";
import { connection } from "./DbConnection/connect.js";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import productrouter from "./router/admin/productRouter.js";
import cors from "cors";
import router from "./router/product.js";
import userrouter from "./router/userRouter.js";
import orderrouter from "./router/order.js";
const app = express();
dotenv.config();
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connection();

// middleWares //
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/users", userrouter);
app.use("/admin", productrouter);
app.use("/products", router);
app.use("/orders", orderrouter);

app.listen(process.env.PORT, () => {
  console.log("connected express");
});
