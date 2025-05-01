import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("databazaya bağlanıldı");
  } catch (error) {
    console.log(error);
  }
};
