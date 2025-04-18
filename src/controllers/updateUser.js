import { users } from "../routes/users.js";

export const updateUser = (req, res) => {
  const { name, age, sex } = req.body;

  const { findUserIndex } = req;

  const updatedUser = { ...users[findUserIndex] };

  if (name !== undefined) updatedUser.name = name;
  if (age !== undefined) updatedUser.age = age;
  if (sex !== undefined) updatedUser.sex = sex;

  users[findUserIndex] = updatedUser;

  res.status(200).json({ msg: updatedUser });
};
