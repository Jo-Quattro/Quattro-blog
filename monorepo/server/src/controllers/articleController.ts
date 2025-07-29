import type { RequestHandler } from "express";
import articleRepository from "../repositories/articleRepository";

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
    const user_id = req.userID;
    if (!user_id) {
      res.status(400).json({ message: "Utilisateur introuvable" });
      return;
    }
    const article = await articleRepository.readArticlesByUser(user_id);
    res.json(article);
  } catch (err) {
    next(err);
  }
};

//EDIT
const editArticle: RequestHandler = async (req, res, next) => {
  try {
    const user_id = req.userID;
    const { title, preview_img, content, id } = req.body;

    if (!id || !title || !content || !user_id) {
      res.status(400).json({ message: "Champs manquants ou invalides" });
      return;
    }
    await articleRepository.updateUserArticle({
      title,
      preview_img,
      content,
      user_id,
      id,
    });

    res.status(201).json({ message: "Article modifié avec succès" });
  } catch (err) {
    next(err);
  }
};
//ADD

const addArticle: RequestHandler = async (req, res, next) => {
  try {
    const { title, preview_img, content } = req.body;
    const user_id = req.userID;
    if (!title || !content || !user_id) {
      res.status(400).json({ message: "Champs manquants" });
      return;
    }

    await articleRepository.createArticle(title, preview_img, content, user_id);

    res.status(201).json({ message: "Article créé avec succès" });
  } catch (err) {
    next(err);
  }
};

//DELETE
const deleteArticle: RequestHandler = async (req, res, next) => {
  try {
    const user_id = req.userID;
    const article_id = req.body.id;
    if (!user_id || !article_id) {
      res.status(400).json({ message: "Champs manquants" });
      return;
    }
    await articleRepository.deleteUserArticle(article_id, user_id);
    res.status(200).json({ message: "Article supprimé avec succès" });
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
  editArticle,
};
