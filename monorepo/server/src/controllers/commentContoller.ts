import type { RequestHandler } from "express";
import commentRepository from "../repositories/commentRepository";
import jwt from "jsonwebtoken";

//BROWSE

//READ

//EDIT

//ADD

const addComment: RequestHandler = async (req, res, next) => {
  try {
    /*    const token = req.cookies?.token;

    if (!token) {
      console.log("Cookies reçus :", req.cookies);
      res.status(401).json({ message: "Pas de token trouvé" }); //
    }

    const decoded = jwt.verify(token, process.env.APP_SECRET as string) as {
      id: number;
    };
 */
    const { text, article_id, user_id } = req.body;
    /*   const user_id: number = decoded.id; */
    console.info(user_id);

    if (!text || !article_id || !user_id) {
      res.status(400).json({ message: "Champs manquants" });
    }

    await commentRepository.createComment({ text, article_id, user_id });

    res.status(201).json({ message: "commentaire créé avec succès" });
  } catch (err) {
    next(err);
  }
};

//DELETE

export { addComment };
