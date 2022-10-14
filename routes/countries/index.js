import express from "express";
import controllers from "./controllers.js";

const router = express.Router();
router.get("/", controllers.getData);

export default router;
