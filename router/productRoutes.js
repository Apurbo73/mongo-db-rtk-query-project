import express from "express";
const router = express.Router();
router.get('/', (req,res)=>{
    res.send("Get all products")
})
router.get('/:productId', (req,res)=>{
    res.send(`Get all product with ${req.params.productId}`)
})
export default router;