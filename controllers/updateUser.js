import { users } from "../routes/users.js";
import { validate as isValidUUID } from "uuid";
// Import UUID validator

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, sex } = req.body;

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  const findUserIndex = users.findIndex((user) => user.id === id);
  if (findUserIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const updatedUser = { ...users[findUserIndex] };

  if (name !== undefined) updatedUser.name = name;
  if (age !== undefined) updatedUser.age = age;
  if (sex !== undefined) updatedUser.sex = sex;

  users[findUserIndex] = updatedUser;

  res.status(200).json({ msg: updatedUser });
};
