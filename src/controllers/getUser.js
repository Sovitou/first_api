import { users } from "../routes/users.js";
export const getUser = (req, res) => {
  res.json({ users });
};

export const findUser = (req, res) => {
  const { findUserIndex } = req;

  res.json(findUserIndex);
};
