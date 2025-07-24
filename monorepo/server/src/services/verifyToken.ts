import jwt from "jsonwebtoken";

const APP_SECRET = process.env.APP_SECRET || "dev-secret";

export const verifyToken = (req: any, res: any, next: any) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Aucun token !" });
  }

  try {
    req.user = jwt.verify(token, APP_SECRET);
    console.info("authenfied successfully");
    return next();
  } catch {
    return res.status(401).json({ message: "Token invalide ou expiré !" });
  }
};
