import { USERS } from "../models/userDB.js";

export const createUser = [
  async (req, res) => {
    const { name, sex } = req.body;

    const newUser = USERS.build({ name, sex });

    try {
      await newUser.save();
      res.status(201).json({
        message: "User has been added.",
        user: newUser,
      });
    } catch (error) {
      res.json(error);
    }
  },
];
