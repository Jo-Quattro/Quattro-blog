import { getDecodedToken } from "./checkAuth";
import { Response, NextFunction } from "express";

export function verifyToken(req: any, _res: Response, next: NextFunction) {
  try {
    req.user = getDecodedToken(req);
    return next();
  } catch (err) {
    next(err);
  }
}
