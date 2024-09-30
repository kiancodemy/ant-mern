import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    Image: { type: String, required: true },
    Title: {
      type: String,
      required: true,
      trim: true,
    },
    Description: {
      type: String,
      required: true,
      trim: true,
    },
    Category: {
      type: String,
      required: true,
      enum: ["men", "women", "kids", "accessories", "footwear"], // Category should be one from the provided array
    },
    Brand: {
      type: String,
      required: true,
      enum: ["nike", "adidas", "puma", "levi", "zara", "h&m"], // Brand should be one from the provided array
    },
    Price: {
      type: Number,
      required: true,
    },
    Saleprice: {
      type: Number,
    },
    TotalStock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Products = mongoose.model("Product", productSchema);
