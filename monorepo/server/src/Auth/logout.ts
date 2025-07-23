import { RequestHandler } from "express";

export const logout: RequestHandler = async (req, res) => {
  res
    .clearCookie("auth_token", {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    })
    .clearCookie("email", { httpOnly: true, sameSite: "strict", secure: true })
    .status(200)
    .json({ message: "Déconnexion réussie" });
};
