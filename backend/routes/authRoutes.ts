import { Router } from "express";
import { login, logout, me, signin } from "../controllers/authController";

const router = Router();

router.post("/login", login);
router.post("/signin", signin);
router.post("/me", me);
router.post("/logout", logout);
