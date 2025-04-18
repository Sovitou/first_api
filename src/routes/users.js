import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createUser } from "../controllers/createUser.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { updateUser } from "../controllers/updateUser.js";

import { validateUserId } from "../middlewares/validateUserId.js";

const router = express.Router();

export let users = [
  {
    id: uuidv4(),
    name: "Sophal",
    age: 19,
    sex: "Male",
  },
];

//get all users

//create newUser
router.post("/users", createUser);

//delete user
router.delete("/users/:id", validateUserId, deleteUser);

//update user
router.patch("/users/:id", validateUserId, updateUser);

export default router;
