import type { RequestHandler } from "express";
import commentRepository from "../repositories/commentRepository";

//BROWSE

//READ
const readCommentsByArticle: RequestHandler = async (req, res, next) => {
  try {
    const article_id = Number(req.params.id);
    if (!article_id) {
      res.status(400).json({ message: "Id invalide" });
    }

    const comments = await commentRepository.readCommentsArticle(article_id);

    res.json(comments);
  } catch (err) {
    next(err);
  }
};
//EDIT

//ADD
const addComment: RequestHandler = async (req, res, next) => {
  try {
    const user_id = req.userID;
    const { text, article_id } = req.body;

    if (!text || !article_id || !user_id) {
      res.status(400).json({ message: "Champs manquants" });
      return;
    }

    await commentRepository.createComment(text, article_id, user_id);
    res.status(201).json({ message: "Commentaire créé avec succès" });
  } catch (err) {
    next(err);
  }
};

//DELETE

export { addComment, readCommentsByArticle };
