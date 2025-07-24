import jwt from "jsonwebtoken";
const APP_SECRET = process.env.APP_SECRET || "dev-secret";

export const checkAuth = (req: any, res: any) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Aucun token" });
  }

  try {
    const decoded = jwt.verify(token, APP_SECRET);
    return res.status(200).json({ user: decoded });
  } catch {
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }
};
