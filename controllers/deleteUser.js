import { users } from "../routes/users.js";

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const { findUserIndex } = req;

  users.splice(findUserIndex, 1); // removes the user from the array

  res.send(`User with ID: ${id} has been deleted.`);
};
