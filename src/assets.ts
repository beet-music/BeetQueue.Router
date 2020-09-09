import * as express from "express";
import { Router } from "express";

const router = Router();
export default router;

router.use("/", express.static("assets", {}));
