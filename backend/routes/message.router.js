import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../moddleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage);

export default router;