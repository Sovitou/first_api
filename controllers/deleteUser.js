import { users } from "../routes/users.js";

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).send(`User with ID: ${id} not found.`);
  }

  users.splice(index, 1); // removes the user from the array

  res.send(`User with ID: ${id} has been deleted.`);
};
