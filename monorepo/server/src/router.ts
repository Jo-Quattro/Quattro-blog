import express from "express";
import { addUser, browseUsers } from "./controllers/userController";
import { hashPassword } from "./services/hashPassword";
import { login } from "./Auth/login";
import { logout } from "./Auth/logout";

const router = express.Router();

router.post("/api/users", hashPassword, addUser);
router.get("/api/users", browseUsers);

router.post("/api/login", login);
router.post("/api/logout", logout);

export default router;
