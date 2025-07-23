import express from "express";
import { addUser, browseUsers } from "./controllers/userController";
import { hashPassword } from "./services/hashPassword";
import { login } from "./Auth/login";

const router = express.Router();

router.post("/api/users", hashPassword, addUser);
router.get("/api/users", browseUsers);

router.post("/api/login", login);

export default router;
