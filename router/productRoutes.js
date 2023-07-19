import express from "express";
import { getAllProducts, getProduct } from "../database/products.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const products = await getAllProducts();
  console.log(products);
  res.send("Get all products");
});
router.get("/:productId", (req, res) => {
  res.send(`Get all product with ${req.params.productId}`);
});
export default router;
