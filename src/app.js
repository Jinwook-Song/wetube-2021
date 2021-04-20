import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { localMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";

import "./passport";

// express 실행한 결과를 app 상수로 저장
const app = express();

const CokieSotore = MongoStore(session);

// application 보안
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
); // cookie를 전달 받아서 사용할 수 있도록 만들어주는 미들웨어 사용자 인증 같은 곳에서 쿠키를 검사할 떄 사용
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
// 사용자가 웹사이트로 전달하는 정보를 검사, request 정보에서 form이나 json 형태로 된 body 검사
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// appllication에서 발생하는 모든 일 logging
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieSotore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// app.use(function (req, res, next) {
//   res.setHeader(
//     "Content-Security-Policy",
//     "script-src 'self' https://archive.org"
//   );
//   return next();
// });

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);
export default app;
