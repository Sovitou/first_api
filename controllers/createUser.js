import { v4 as uuidv4 } from "uuid";
import { users } from "../routes/users.js";
export const createUser = (req, res) => {
  const newUser = req.body;

  users.push({ id: uuidv4(), ...newUser });
  res.send(`User has been added.`).json(newUser);
};
