import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";
import { onlyPrivite } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivite, editProfile);
userRouter.get(routes.changePassword, onlyPrivite, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
