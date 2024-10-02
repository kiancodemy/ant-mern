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
    } else if (req.query.sort === "-1") {
      query.sort({ Price: -1 });
    } else if (req.query.sort === "-2") {
      query.sort({ Title: -1 });
    } else if (req.query.sort === "2") {
      query.sort({ Title: 1 });
    }
  }

  const info = await query;
  res.status(200).json({
    message: "greate",
    info: info,
  });
};
export const ProductById = async (req, res) => {
  try {
    const find = await Products.findById(req.params.id);
    if (!find) {
      throw new Error("there is no product");
    }
    res.status(200).json(find);
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "failed to find",
    });
  }
};
