import express from "express";
import { addUser, browseUsers } from "./controllers/userController";
import { hashPassword } from "./services/hashPassword";
import { login } from "./Auth/login";
import { logout } from "./Auth/logout";
import {
  addArticle,
  browseArticles,
  readArticle,
} from "./controllers/articleController";
import multer from "multer";
import {
  addComment,
  readCommentsArticle,
} from "./controllers/commentController";
import { verifyToken } from "./services/verifyToken";
import { checkAuth } from "./services/checkAuth";

/* const upload = multer(); */
//TODO NEXT ADD MULTER MIDDLEWARE

const router = express.Router();

router.post("/api/users", hashPassword, addUser);
router.get("/api/users", browseUsers);
router.get("/api/articles", browseArticles);
router.get("/api/article/:id", readArticle);
router.get("/api/comments/:id", readCommentsArticle);

router.post("/api/login", login);
router.post("/api/logout", logout);
router.post(
  "/api/create/article",
  verifyToken /* , upload.none() */,
  addArticle
);
router.post("/api/comments", verifyToken, addComment);
router.get("/api/auth", checkAuth);

export default router;
