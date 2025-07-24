import type { RequestHandler } from "express";
import userRepository from "../repositories/userRepository";

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

export { addUser, browseUsers };
