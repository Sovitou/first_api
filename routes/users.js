import express from "express";
import { v4 as uuidv4 } from "uuid";
import { findUser, getUser } from "../controllers/getUser.js";
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
router.get("/", getUser);

//create newUser
router.post("/", createUser);

//find user
router.get("/:id", validateUserId, findUser);

//delete user
router.delete("/:id", validateUserId, deleteUser);

//update user
router.patch("/:id", validateUserId, updateUser);

export default router;
