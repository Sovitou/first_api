import express from "express";
import { createUser } from "../controllers/createUser.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { updateUser } from "../controllers/updateUser.js";
import { validateUserId } from "../middlewares/validateUserId.js";
import { findAllUsers } from "../controllers/findAllUsers.js";
import { findUser } from "../controllers/findUser.js";

const router = express.Router();

//find all user
router.get("/users", findAllUsers);

//find user by id
router.get("/users/:id", findUser);

//create newUser
router.post("/users", createUser);

//delete user
router.delete("/users/:id", validateUserId, deleteUser);

// //update user
router.patch("/users/:id", validateUserId, updateUser);

export default router;
