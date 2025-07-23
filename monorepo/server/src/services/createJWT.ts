import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

interface User {
  id: number;
  is_admin: boolean;
}

export function createJWT(user: User) {
  const myPayload: JwtPayload & { isAdmin: boolean } = {
    sub: user.id.toString(),
    isAdmin: user.is_admin,
  };

  const token = jwt.sign(myPayload, process.env.APP_SECRET as string, {
    expiresIn: "1h",
  });

  return token;
}
