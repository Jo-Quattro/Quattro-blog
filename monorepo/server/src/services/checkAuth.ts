import jwt from "jsonwebtoken";

const APP_SECRET = process.env.APP_SECRET || "dev-secret";

export function getDecodedToken(req: any) {
  const token = req.cookies?.token;
  if (!token) {
    const err = new Error("No token");
    (err as any).status = 401;
    throw err;
  }
  try {
    return jwt.verify(token, APP_SECRET);
  } catch {
    const err = new Error("Invalid or expired token");
    (err as any).status = 401;
    throw err;
  }
}
