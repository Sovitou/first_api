import { USERS } from "../models/userDB.js";

export const findUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await USERS.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
