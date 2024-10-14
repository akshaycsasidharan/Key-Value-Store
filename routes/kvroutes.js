import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import {
  createKeyValue,
  readKeyValue,
  deleteKeyValue,
  getkeyValue,
} from "../controllers/kvcontroller.js";

const router = express.Router();

router.post("/kv", verifyToken, createKeyValue);

router.get("/kv", verifyToken, getkeyValue);

router.get("/kv/:id", verifyToken, readKeyValue);

router.delete("/kv/:id", verifyToken, deleteKeyValue);

export default router;
