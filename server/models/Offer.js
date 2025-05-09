import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: String, required: true },
  year: { type: String, required: true },
  mileage: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userEmail: { type: String, required: true },
  approved: { type: Boolean, default: false },
});

const Offer = mongoose.model("Offer", OfferSchema);

export default Offer;
