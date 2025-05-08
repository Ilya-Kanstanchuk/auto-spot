import express from "express";
import Offer from "../models/Offer.js";
import upload from "../utils/connectCloudinary.js";
const router = express.Router();

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { brand, model, price, year, mileage, type, description, userId } =
      req.body;
    const imageUrl = req.file.path;
    const newOffer = new Offer({
      brand: brand,
      model: model,
      price: price,
      year: year,
      mileage: mileage,
      type: type,
      description: description,
      imageURL: imageUrl,
      userId: userId,
    });
    await newOffer.save();
    return res
      .status(200)
      .json({ success: true, message: "Offer was added successfully" });
  } catch (error) {
    return res.status(500).json({ succes: false, message: "Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find({ approved: true });
    return res.status(200).json({ success: true, offers });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
});

export default router;
