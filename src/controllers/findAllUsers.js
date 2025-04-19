import { USERS } from "../models/userDB.js";

export const findAllUsers = async (req, res) => {
  try {
    const getAllUsers = await USERS.findAll();
    res.status(200).json(getAllUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
