import express from "express";

import { kvcreate } from "../controllers/kvcontroller.js";

const router = express.Router();

router.post("/kvcreate", kvcreate);

export default router;
