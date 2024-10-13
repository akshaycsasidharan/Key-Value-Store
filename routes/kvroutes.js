import express from "express";

import {
  createKeyValue,
  readKeyValue,
  deleteKeyValue,
  getkeyValue,
} from "../controllers/kvcontroller.js";

const router = express.Router();

router.post("/kv", createKeyValue);

router.get("/kv/:id", readKeyValue);

router.get("/kv", getkeyValue);

router.delete("/kv/:id", deleteKeyValue);

export default router;
