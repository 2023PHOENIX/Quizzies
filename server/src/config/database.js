import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const respose = await mongoose.connect(process.env.MONGO_DB, {
      dbName: "quizze",
    });

    return respose;
  } catch (e) {
    console.log(e.message);
  }
};
