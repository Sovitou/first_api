import { users } from "../routes/users.js";
export const getUser = (req, res) => {
  res.json({ users });
};

export const findUSer = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    res.send("User not found");
  }
  res.send({ foundUser });
};
