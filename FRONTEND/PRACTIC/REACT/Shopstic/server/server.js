import express from "express"
import Razorpay from "razorpay"
import cors from "cors"
import dotenv from"dotenv"
dotenv.config(); 


const app = express();
app.use(cors())
app.use(express.json())

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });


  app.post("/create-order", async (req, res) => {
    try {
      const options = {
        amount: req.body.amount * 100, // Convert ₹ to paise
        currency: "INR",
      };
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))