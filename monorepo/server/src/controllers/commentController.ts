import type { RequestHandler } from "express";
import commentRepository from "../repositories/commentRepository";
import jwt from "jsonwebtoken";

//BROWSE

//READ
const readCommentsArticle: RequestHandler = async (req, res, next) => {
  try {
    const articleId = Number(req.params.id);
    if (!articleId) {
      res.status(400).json({ message: "Id invalide" });
    }

    const comments = await commentRepository.readCommentsArticle({
      article_id: articleId,
    });

    res.json(comments);
  } catch (err) {
    next(err);
  }
};
//EDIT

//ADD

const addComment: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      res.status(401).json({ message: "Pas de token trouvé" });
    }

    const decoded = jwt.verify(token, process.env.APP_SECRET as string) as {
      id: number;
    };
    const user_id = decoded.id;

    const { text, article_id } = req.body;

    if (!text || !article_id) {
      res.status(400).json({ message: "Champs manquants" });
    }

    await commentRepository.createComment({ text, article_id, user_id });

    res.status(201).json({ message: "Commentaire créé avec succès" });
  } catch (err) {
    next(err);
  }
};

//DELETE

export { addComment, readCommentsArticle };
