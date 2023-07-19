import express from "express";
import productRoutes from "./router/productRoutes.js";
import orderRoutes from "./router/productRoutes.js"
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use("/orders",orderRoutes);
app.use("/products", productRoutes);
app.get("/", (req, res) => {
  res.send("<h2>hi broh</h2>");
});
app.listen(PORT, () => { 
  console.log("first");
});
