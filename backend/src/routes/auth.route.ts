import { Router } from "express";
import { login, logout, me, signup } from "../controllers/auth.controller";
import { requireUser } from "../middleware/auth.middleware";

const router = Router();

router.post("/login", login);
router.post("/signin", signup);
router.post("/me", requireUser, me);
router.post("/logout", logout);

export default router;
