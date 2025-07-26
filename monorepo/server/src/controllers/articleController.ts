import type { RequestHandler } from "express";
import articleRepository from "../repositories/articleRepository";
import jwt from "jsonwebtoken";

//BROWSE
const browseArticles: RequestHandler = async (req, res, next) => {
  try {
    const articles = await articleRepository.readAllArticles();
    res.json(articles);
  } catch (err) {
    next(err);
  }
};
//READ
const readArticle: RequestHandler = async (req, res, next) => {
  try {
    const articleId = Number(req.params.id);
    const article = await articleRepository.readSingleArticle(articleId);
    res.json(article);
  } catch (err) {
    next(err);
  }
};
const readArticlesByUser: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      res.status(401).json({ message: "Pas de token trouvé" });
    }

    const decoded = jwt.verify(token, process.env.APP_SECRET as string) as {
      id: number;
    };
    const user_id = decoded.id;

    const article = await articleRepository.readArticlesByUser(user_id);
    res.json(article);
  } catch (err) {
    next(err);
  }
};

//EDIT

//ADD

const addArticle: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      res.status(401).json({ message: "Pas de token trouvé" });
    }

    const decoded = jwt.verify(token, process.env.APP_SECRET as string) as {
      id: number;
    };

    const { title, preview_img, content } = req.body;
    const user_id = decoded.id;
    if (!title || !content || !user_id) {
      res.status(400).json({ message: "Champs manquants" });
    }

    await articleRepository.createArticle({
      title,
      preview_img,
      content,
      user_id,
    });

    res.status(201).json({ message: "Article créé avec succès" });
  } catch (err) {
    next(err);
  }
};

//DELETE
const deleteArticle: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    const articleID = req.body.id;
    if (!token) {
      res.status(401).json({ message: "Pas de token trouvé" });
    }
    const decoded = jwt.verify(token, process.env.APP_SECRET as string) as {
      id: number;
      name: string;
    };
    const user_id = decoded.id;
    if (!user_id) {
      res.status(400).json({ message: "Champs manquants" });
    }
    await articleRepository.deleteUserArticle(articleID, user_id);
    res.status(201).json({ message: "Article supprimé avec succès" });
  } catch (err) {
    next(err);
  }
};

export {
  addArticle,
  browseArticles,
  readArticle,
  deleteArticle,
  readArticlesByUser,
};
