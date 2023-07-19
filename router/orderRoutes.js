import { express } from "express";
import { getOrder,createOrder } from "../database/orders";
const router = express.Router();
router.get("/:reference", (req, res) => {
  res.send(`Getting orders with reference ${req.params.reference}`);
});

// create order endpoint:
router.post('/', async(req,res)=>{
  const orderDate= req.body;
  const newOrder= await createOrder(orderDate)
    res.status(201).send({status:'OK', data:newOrder})
})
export default router;
