import express from "express";
import productRoutes from "./router/productRoutes.js";
const app = express();
const PORT = 3000;
app.use("/products", productRoutes);
app.get("/", (req, res) => {
  res.send("<h2>hi broh</h2>");
});
app.listen(PORT, () => {
  console.log("first");
});
