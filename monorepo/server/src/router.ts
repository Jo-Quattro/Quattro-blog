import express from "express";
import {
  addUser,
  browseUsers,
  getUserById,
} from "./controllers/userController";
import { hashPassword } from "./services/hashPassword";
import { login } from "./Auth/login";
import { logout } from "./Auth/logout";
import {
  addArticle,
  browseArticles,
  readArticle,
  deleteArticle,
  readArticlesByUser,
} from "./controllers/articleController";
//import multer from "multer";
import {
  addComment,
  readCommentsArticle,
} from "./controllers/commentController";
import { verifyToken } from "./services/verifyToken";
import { Response } from "express";

//**************************************************** TODO NEXT ADD MULTER MIDDLEWARE ****************************************************

const router = express.Router();

//AUTH
router.post("/api/login", login);
router.post("/api/logout", logout);
router.get("/api/auth", verifyToken, (req: any, res: Response) => {
  res.status(200).json({ user: req.user });
});
//USER
router.post("/api/users", hashPassword, addUser);
router.get("/api/users", browseUsers);
router.get("/api/user", verifyToken, getUserById);

//ARTICLE
router.get("/api/articles", browseArticles);
router.get("/api/article/:id", readArticle);
router.post("/api/create/article", verifyToken, addArticle);
router.post("/api/delete/article", verifyToken, deleteArticle);
router.get("/api/user-articles", verifyToken, readArticlesByUser);

//COMMENTS
router.get("/api/comments/:id", readCommentsArticle);
router.post("/api/comments", verifyToken, addComment);

export default router;
