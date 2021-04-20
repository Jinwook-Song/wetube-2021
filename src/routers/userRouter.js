import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  getChangePassword,
  postEditProfile,
  postChangePassword,
} from "../controllers/userController";
import { onlyPrivite, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivite, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivite, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivite, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivite, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
