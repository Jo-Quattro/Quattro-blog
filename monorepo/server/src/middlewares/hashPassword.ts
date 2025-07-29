import argon2 from "argon2";
import type { RequestHandler } from "express";

export const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.password) {
      res.status(400).json({ message: "Mot de passe requis." });
    }

    req.body.password = await argon2.hash(req.body.password);
    next();
  } catch (error) {
    next(error);
  }
};
