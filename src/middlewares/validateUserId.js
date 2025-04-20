import { USERS } from "../models/userDB.js";
import { param, validationResult } from "express-validator";

export const validateUserId = [
  param("id")
    .notEmpty()
    .withMessage("ID is required")
    .isNumeric()
    .withMessage("ID must be a number"),

  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    next();
  },

  async (req, res, next) => {
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
  },
];
