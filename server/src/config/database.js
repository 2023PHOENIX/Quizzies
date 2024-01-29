import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_DB, {
      dbName: "quizze",
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
};
