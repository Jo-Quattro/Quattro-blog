import express from "express";
import {
  addUser,
  browseUsers,
  getUserById,
} from "./controllers/userController";
import { hashPassword } from "./middlewares/hashPassword";
import { login } from "./Auth/login";
import { logout } from "./Auth/logout";
import {
  addArticle,
  browseArticles,
  readArticle,
  deleteArticle,
  readArticlesByUser,
  editArticle,
} from "./controllers/articleController";
import multer from "multer";
import {
  addComment,
  readCommentsByArticle,
} from "./controllers/commentController";
import { Response } from "express";
import { requireAuth } from "./middlewares/requireAuth";

//**************************************************** TODO NEXT ADD MULTER MIDDLEWARE ****************************************************
const upload = multer();
const router = express.Router();

//USER
router.post("/api/users", hashPassword, addUser);
router.get("/api/users", browseUsers);

//ARTICLE
router.get("/api/articles", browseArticles);
router.get("/api/article/:id", readArticle);
//COMMENTS
router.get("/api/comments/:id", readCommentsByArticle);

//AUTH
router.post("/api/login", login);
router.post("/api/logout", logout);
router.get("/api/auth", requireAuth, (req: any, res: Response) => {
  res.status(200).json({ userId: req.userId });
});

//PROTECTED ROUTES
router.use(requireAuth);

//User
router.get("/api/user", getUserById);

//Articles
router.post("/api/create/article", addArticle);
router.post("/api/delete/article", deleteArticle);
router.get("/api/user-articles", readArticlesByUser);
router.put("/api/article/:id", upload.none(), editArticle);

//Comments
router.post("/api/comments", addComment);
//Auth

export default router;
