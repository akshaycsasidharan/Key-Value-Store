import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import dotenv from "dotenv";
import KvRoutes from "./routes/kvroutes.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", KvRoutes);

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`"server running on port ${PORT}"`);
    });
    console.log("successfully connected to database");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });
