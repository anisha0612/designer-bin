import express from "express";
const router = express.Router();
import Product from "../models/productsModel.js";
import asyncHandler from "express-async-handler";

// * @desc Fetch all collections with shop Data
// * @route GET /api/
// * @access Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // console.log(products);
    res.json(products);
  })
);

//* @desc Fetch all products of a particular category
//* @route GET /api/:category
//* @access Public

router.get("/:category", async (req, res) => {
  const category = req.params.category;
  const capitalizeQuery = category[0].toUpperCase() + category.substring(1);
  // find the category specified in the request
  const categoryData = await Product.find({
    title: capitalizeQuery,
  }).select({ items: 1, _id: 0 });
  // if category found send the category object else send the category not found
  categoryData
    ? res.send(categoryData[0].items)
    : res.status(404).json({ message: "Category not found" });
});

//* @desc Fetch a single product
//* @route GET /api/:category/:id
//* @access Public

router.get(
  "/:category/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.find(
      { "items._id": req.params.id },
      { "items.$": 1 }
    );

    product
      ? res.json(product[0].items[0])
      : res.status(404).json({ message: "Product not found" });
  })
);

export default router;
