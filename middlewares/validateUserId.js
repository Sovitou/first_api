import { users } from "../routes/users.js";
import { validate as isValidUUID } from "uuid";

export const validateUserId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidUUID(id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  const findUserIndex = users.findIndex((user) => user.id === id);
  if (findUserIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  req.findUserIndex = findUserIndex;

  next();
};
