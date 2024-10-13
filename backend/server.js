import app from "./app.js";
import cloudinary from "cloudinary";
// import { config } from "dotenv";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// config({ path: "./config.env" });

// console.log(process.env.PORT);


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
