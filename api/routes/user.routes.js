import express from "express";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/index.js";
const userRoutes = express.Router();

userRoutes.post("/", registerUser);
userRoutes.post("/auth", authUser);
userRoutes.post("/logout", logoutUser);
userRoutes.route("/profile").get(getUserProfile).put(updateUserProfile);
// userRoutes.post("/auth", authUser);

export { userRoutes };
