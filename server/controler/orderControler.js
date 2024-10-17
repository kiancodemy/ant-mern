import { Orders } from "../model/order.js";
export const createOrder = async (req, res) => {
  try {
    await Orders.create(req.body);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
    });
  }
};
