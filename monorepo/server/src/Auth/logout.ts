import { RequestHandler } from "express";

export const logout: RequestHandler = async (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    })
    .clearCookie("email", { httpOnly: true, sameSite: "strict", secure: true })
    .status(200)
    .json({ message: "Déconnecté" });
};
