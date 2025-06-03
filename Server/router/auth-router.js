import express from "express";
import * as authControllers from "../controllers/auth-controller.js";

const router = express.Router();

router.get("/", authControllers.home);
router.post("/register", authControllers.register);

export default router;
