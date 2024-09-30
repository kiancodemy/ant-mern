import cloudinary from "cloudinary";
import { Products } from "../../model/products.js";
import fs from "fs";
export const addProduct = async (req, res) => {
  cloudinary.config({
    cloud_name: "dsegkejic",
    api_key: "266287855623232",
    api_secret: process.env.APISECRET,
  });

  if (!req.file) {
    return res.status(400).send("No file uploaded."); // Check if file is uploaded
  }

  const filePath = req.file.path;

  try {
    // Upload to Cloudinary specifying the folder name
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "uploader",
    });

    // Clean up local file
    fs.unlinkSync(filePath);

    // Send the response with the uploaded file URL
    res.status(200).json({
      message: "File uploaded successfully to Cloudinary",
      url: result.secure_url, // This will return the file URL
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res
      .status(500)
      .json({ error: "Upload to Cloudinary failed", details: error });
  }
};

///create product///
export const CreateProduct = async (req, res) => {
  try {
    await Products.create(req.body);

    res.status(200).json({
      status: "success",
      message: "created successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      message: "failed to created successfully",
    });
  }
};

///delte produt//

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("you have no prouct id!!!");
    }
    await Products.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      message: err.message,
    });
  }
};

///updated products

export const UpdateProduct = async (req, res) => {
  try {
    const updated = req.body;
    const find = await Products.findById(updated._id);
    if (!find) {
      throw new Error("there is not such product");
    }
    find.Title = updated.Title || find.Title;
    find.Description = updated.Description || find.Description;
    find.Category = updated.Category || find.Category;
    find.Brand = updated.Brand || find.Brand;
    find.Price = updated.Price || find.Price;
    find.Saleprice = updated.Saleprice || find.Saleprice;
    find.TotalStock = updated.TotalStock || find.TotalStock;
    find.Image = updated.Image || find.Image;
    await find.save();

    res.status(200).json({
      status: "success",
      message: "updated successfully",
      info: find,
    });
  } catch (err) {
    res.status(400).json({
      status: "faild",
      message: err.message,
    });
  }
};

///fetch products
export const AllProducts = async (req, res) => {
  try {
    const find = await Products.find({});

    res.status(200).json({
      status: "success",
      message: "fetched successfully",
      info: find,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
