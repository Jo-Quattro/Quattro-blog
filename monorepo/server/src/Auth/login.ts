import { RequestHandler } from "express";
import userRepository from "../repositories/userRepository";
import { verifyPassword } from "../services/verifyPasword";
import { createJWT } from "../services/createJWT";
import { createCookie } from "../services/createCookie";

export const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readByEmail(req.body.email);

    if (!user) {
      console.info("Utilisateur non trouvé");
      res.status(401).json({ message: "Email ou mot de passe invalide." });
      return;
    }
    const isValid = await verifyPassword(req.body.password, user.password);
    if (!isValid) {
      console.info("Wrong password");
      res.sendStatus(422);
      return;
    }
    const { password, ...userWithoutPassword } = user;
    const jwt = await createJWT(user);

    createCookie(res, jwt);
    res.json({
      user: userWithoutPassword,
      message: "Login successful",
    });
    console.info(
      `Credentials matching, welcome ${user.name}, your JWT : ${jwt}`
    );
  } catch (err) {
    next(err);
  }
};
