// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Vidieos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEIO_DETAIL = "/:id";
const EDIT_VIDEIO = "/:id/edit";
const DELETE_VIDIO = "/:id/delete";

// Object
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEIO_DETAIL,
  editVideo: EDIT_VIDEIO,
  deleteVideo: DELETE_VIDIO,
};

export default routes;
