import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import apiRoutes from "./routes/index.js";
import { connectDB } from "./config/database.js";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(process.env.PORT, async () => {
  console.log(`connected to port : `, process.env.PORT);
  const response = await connectDB();
  if (response) console.log("connect to db");
});
