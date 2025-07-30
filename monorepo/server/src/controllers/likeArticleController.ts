import { RequestHandler } from "express";
import likeArticleRepository from "../repositories/likeArticleRepository";

export const toggleLike: RequestHandler = async (req, res) => {
  const userId = req.userID;
  const articleId = Number(req.params.articleId);

  if (!userId || !articleId) {
    res.status(400).json({ error: "Champs requis manquants" });
    return;
  }

  try {
    const existingLike = await likeArticleRepository.findByUserAndArticle(
      userId,
      articleId
    );

    if (existingLike) {
      await likeArticleRepository.removeLike(userId, articleId);
      res.status(200).json({ liked: false });
    } else {
      await likeArticleRepository.createLike(userId, articleId);
      res.status(200).json({ liked: true });
    }
  } catch (err) {
    console.error("Erreur toggle like:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const isLiked: RequestHandler = async (req, res) => {
  const userId = req.userID;
  const articleId = Number(req.params.articleId);

  if (!userId || !articleId) {
    res.status(400).json({ error: "Champs requis manquants" });
    return;
  }

  try {
    const like = await likeArticleRepository.findByUserAndArticle(
      userId,
      articleId
    );
    res.status(200).json({ liked: !!like });
  } catch (err) {
    console.error("Erreur isLiked:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export const getLikeCount: RequestHandler = async (req, res) => {
  const articleId = Number(req.params.articleId);

  if (!articleId) {
    res.status(400).json({ error: "Article ID manquant" });
    return;
  }

  try {
    const count = await likeArticleRepository.countLikes(articleId);
    res.status(200).json({ count });
  } catch (err) {
    console.error("Erreur getLikeCount:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
