import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller.js";

router.post("/api/signup", authCtrl.signUp);

router.post("/api/login", authCtrl.login);

export default router;
