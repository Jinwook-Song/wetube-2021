import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoControllers";
import { onlyPrivite, uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, onlyPrivite, getUpload);
videoRouter.post(routes.upload, onlyPrivite, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivite, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivite, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivite, deleteVideo);

export default videoRouter;
