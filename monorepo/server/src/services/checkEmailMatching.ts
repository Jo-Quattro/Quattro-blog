import { RequestHandler } from "express";
import userRepository from "../repositories/userRepository";
const checkEmailMatching: RequestHandler = async (req, res, next) => {
  if (req.body.email === userRepository.readByEmail) {
  }
};
