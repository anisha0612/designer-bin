import express from "express";
import shopData from "./data/shopData.js";

const app = express();

// get route

app.get("/", (req, res) => {
  res.send("API is running...");
});

//  get items based on category

app.get("/:category", (req, res) => {
  const category = shopData.find(
    (obj) => obj.title.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(category.items);
});

// get a single item based on id from each category

app.get("/:category/:id", (req, res) => {
  const categoryItems = shopData.find(
    (category) => category.title.toLowerCase() === req.params.category
  ).items;
  const product = categoryItems.find((item) => item.id == req.params.id);
  res.json(product);
});

app.listen(5000, console.log("Server running on port 5000"));
