import { Products } from "../model/products.js";

export const All = async (req, res) => {
  let query = Products.find({});
  if (req.query.category) {
    query.find({ Category: req.query.category });
  }
  if (req.query.brand) {
    query.find({ Brand: req.query.brand });
  }
  if (req.query.sort) {
    if (req.query.sort === "1") {
      query.sort({ Price: 1 });
    } else {
      query.sort({ Price: -1 });
    }
  }
  const info = await query;
  res.status(200).json({
    message: "greate",
    info: info,
  });
};
