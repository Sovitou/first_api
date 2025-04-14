import { users } from "../routes/users.js";

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age, sex } = req.body;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send(`User with ID: ${id} not found.`);
  }

  if (name) user.name = name;
  if (age) user.age = age;
  if (sex) user.sex = sex;

  res.send(`User's ID ${id} has been updated`);
};
