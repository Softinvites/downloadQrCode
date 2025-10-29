"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const guestController_1 = require("../controllers/guestController");
const auth_1 = __importDefault(require("../library/middlewares/auth"));
const router = express_1.default.Router();
// Guest routes
router.get("/download-qrcode/:id", auth_1.default, guestController_1.downloadQRCode);
exports.default = router;
