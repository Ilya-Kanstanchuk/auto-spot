import express from "express";
import Offer from "../models/Offer.js";
import middleware from "../middleware/middleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import User from "../models/User.js";
const router = express.Router();

router.get("/allusers", middleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find({ role: "user" });
    if (!users) {
      return res
        .status(401)
        .json({ success: false, message: "Something went wrong" });
    }
    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
});
router.get("/offers", middleware, adminMiddleware, async (req, res) => {
  try {
    const offers = await Offer.find({ approved: false });
    if (!offers) {
      return res
        .status(401)
        .json({ success: false, message: "Something went wrong" });
    }
    return res.status(200).json({ success: true, offers });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
});

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

router.put(
  "/accept/offer/:id",
  middleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const id = req.params.id;
      const offer = await Offer.findByIdAndUpdate(id, { approved: true });
      if (!offer) {
        return res
          .status(401)
          .json({ success: false, message: "Something went wrong" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Offer was approved successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Error" });
    }
  }
);

router.delete(
  "/delete/user/:id",
  middleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const user = await User.findOneAndDelete({
        _id: req.params.id,
      });
      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "Something went wrong" });
      }
      await Offer.deleteMany({ userId: req.params.id });
      return res
        .status(200)
        .json({ success: true, message: "User was deleted successfully" });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Error" });
    }
  }
);

export default router;
