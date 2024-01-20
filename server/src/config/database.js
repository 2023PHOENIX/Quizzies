import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const respose = await mongoose.connect(process.env.MONGODB);

    return respose;
  } catch (e) {
    console.log(e.message);
  }
};
