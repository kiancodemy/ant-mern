import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    totalQuantity: { type: Number, required: true },
    totalTax: { type: Number, required: true },
    totalprice: { type: Number, required: true },
    isDelivered: { type: Boolean, default: false },
    isPaid: { type: Boolean, default: false },
    orders: [
      {
        Brand: String,
        Category: String,
        Description: String,
        Image: String,
        Price: Number,
        Saleprice: Number,
        Title: String,
        TotalStock: Number,
        quantity: Number,
        _id: String,
      },
    ],
  },
  { timestamps: true }
);

export const Orders = mongoose.model("Order", productSchema);
