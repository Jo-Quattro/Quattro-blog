import { Request, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const requireAuth: RequestHandler = (
  req: Request,
  res: any,
  next: NextFunction
) => {
  const APP_SECRET = process.env.APP_SECRET || "dev-secret";
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Token manquant" });
  }

  try {
    const decoded = jwt.verify(token, APP_SECRET) as { id: number };
    req.userID = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }
};
