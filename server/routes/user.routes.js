import { Router } from "express";
import {
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
  login,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUser);
router.post("/api/users", addUser);
router.put("/api/users/edit/:id", editUser);
router.delete("/api/users/delete/:id", deleteUser);
router.post("/api/users/login", login);

export default router;
