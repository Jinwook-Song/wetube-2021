import express from "express";
import routes from "../routes";
import {
  userDetail,
  changePassword,
  getEditProfile,
  postEditProfile,
} from "../controllers/userController";
import { onlyPrivite, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivite, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivite, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivite, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
