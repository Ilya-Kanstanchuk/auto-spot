import express from "express";
import Offer from "../models/Offer.js";
import middleware from "../middleware/middleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
const router = express.Router();

router.delete(
  "/delete/offer/:id",
  middleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const offer = await Offer.findOneAndDelete({
        _id: req.params.id,
      });
      if (!offer) {
        return res
          .status(401)
          .json({ success: false, message: "Something went wrong" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Ffer was deleted successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Error" });
    }
  }
);

export default router;
