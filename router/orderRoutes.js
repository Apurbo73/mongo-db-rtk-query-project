import { express } from "express";
const router = express.Router();
router.get("/:reference", (req, res) => {
  res.send(`Getting orders with reference ${req.params.reference}`);
});

// create order endpoint:
router.post('/', (req,res)=>{
    res.send('Creating an order')
})
export default router;
