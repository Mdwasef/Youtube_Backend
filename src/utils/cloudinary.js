import "../config/env.js";


import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME?.trim(),
  api_key: process.env.CLOUDINARY_API_KEY?.trim(),
  api_secret: process.env.CLOUDINARY_API_SECRET?.trim(),
});

console.log("Cloudinary Config =>", cloudinary.config());

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const absolutePath = path.resolve(localFilePath);

    const response = await cloudinary.uploader.upload(absolutePath, {
      resource_type: "auto",
    });

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response;
  } catch (error) {
    console.log("UPLOAD ERROR =>", error);
    return null;
  }
};

export { uploadOnCloudinary };
