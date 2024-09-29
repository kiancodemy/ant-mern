import cloudinary from "cloudinary";
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
