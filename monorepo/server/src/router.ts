import express from "express";
import { addUser, browseUsers } from "./controllers/userController";
import { hashPassword } from "./services/hashPassword";
import { login } from "./Auth/login";
import { logout } from "./Auth/logout";
import { addArticle } from "./controllers/articleController";
import multer from "multer";

/* const upload = multer(); */
//TODO NEXT ADD MULTER MIDDLEWARE

const router = express.Router();

router.post("/api/users", hashPassword, addUser);
router.get("/api/users", browseUsers);

router.post("/api/login", login);
router.post("/api/logout", logout);
router.post("/api/create/article" /* , upload.none() */, addArticle);

export default router;
