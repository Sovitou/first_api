import { USERS } from "../models/userDB.js";

export const validateUserId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await USERS.findByPk(id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
