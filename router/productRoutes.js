import express from "express";
import { getAllProducts, getProduct } from "../database/products.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const products = await getAllProducts();
  console.log(products);
  res.send({ status: "Ok", data: products });
});
router.get("/:productId", async (req, res) => {
  try {
    const product = await getProduct(req.params.productId);
    if (!product) {
      res.status(404).send({ status: "Failed", error: "Product Not Found" });
    } else {
      console.log(product);
      res.send({ status: "Ok", data: product });
    }
  } catch (e) {
    res.status(401).send({ status: "Failed", error: e.message });
  }
});
export default router;
