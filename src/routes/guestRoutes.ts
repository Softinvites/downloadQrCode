import express from "express";
import {
  downloadQRCode,
} from "../controllers/guestController";
import auth from "../library/middlewares/auth";

const router = express.Router();
// Guest routes
router.get("/download-qrcode/:id", auth, downloadQRCode);
export default router;
