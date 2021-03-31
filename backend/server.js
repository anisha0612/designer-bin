import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import shopData from "./data/shopData.js";
import productRoute from "./routes/productsRoute.js";

dotenv.config();

connectDB();

const app = express();

// get route

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", productRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running  ${process.env.NODE_ENV} mode on port ${PORT}`)
);
