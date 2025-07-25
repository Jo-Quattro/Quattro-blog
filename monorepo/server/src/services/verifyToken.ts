import { getDecodedToken } from "./checkAuth";

export function verifyToken(req: any, res: any, next: any) {
  try {
    req.user = getDecodedToken(req);
    return next();
  } catch (err: any) {
    return res.status(err.status || 401).json({ message: err.message });
  }
}
