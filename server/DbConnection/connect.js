import mongoose from "mongoose";
export const connection = async () => {
  try {
    await mongoose.connect(process.env.address);
    console.log("connected to mongoose");
  } catch (err) {
    console.log(err);
  }
};
