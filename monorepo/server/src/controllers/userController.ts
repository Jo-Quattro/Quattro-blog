import type { RequestHandler } from "express";
import userRepository from "../repositories/userRepository";
import jwt from "jsonwebtoken";

//BROWSE
const browseUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await userRepository.readAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};
//READ
const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      res.status(401).json({ message: "Pas de token trouvé" });
    }

    const decoded = jwt.verify(token, process.env.APP_SECRET as string) as {
      id: number;
    };
    const user_id = decoded.id;

    const article = await userRepository.readSingleUser(user_id);
    res.json(article);
  } catch (err) {
    next(err);
  }
};

//EDIT

//ADD
const addUser: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const insertId = await userRepository.createUser(newUser);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

//DELETE

export { addUser, browseUsers, getUserById };
