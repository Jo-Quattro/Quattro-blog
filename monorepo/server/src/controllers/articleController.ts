import type { RequestHandler } from "express";
import articleRepository from "../repositories/articleRepository";
import jwt from "jsonwebtoken";

//BROWSE
/* const browseArticles: RequestHandler = async (req, res, next) => {
  try {
    const articles = await articleRepository.readAllArticles();
    res.json(articles)
  } catch (err) {
    next(err);
  }
}; */
//READ

//EDIT

//ADD

const addArticle: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      console.log("Cookies reçus :", req.cookies);
      res.status(401).json({ message: "Pas de token trouvé" }); //
    }

    const decoded = jwt.verify(token, process.env.APP_SECRET as string) as {
      id: number;
    };

    const { title, content } = req.body;
    const user_id = decoded.id;
    console.info(user_id);

    if (!title || !content || !user_id) {
      res.status(400).json({ message: "Champs manquants" });
    }

    await articleRepository.createArticle({ title, content, user_id });

    res.status(201).json({ message: "Article créé avec succès" });
  } catch (err) {
    next(err);
  }
};

//DELETE

export { addArticle /* , browseArticles  */ };
