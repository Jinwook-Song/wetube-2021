import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localMiddelware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

// express 실행한 결과를 app 상수로 저장
const app = express();

// application 보안
app.use(helmet()); // cookie를 전달 받아서 사용할 수 있도록 만들어주는 미들웨어 사용자 인증 같은 곳에서 쿠키를 검사할 떄 사용
app.use(cookieParser());
// 사용자가 웹사이트로 전달하는 정보를 검사, request 정보에서 form이나 json 형태로 된 body 검사
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// appllication에서 발생하는 모든 일 logging
app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});

app.set("view engine", "pug");

app.use(localMiddelware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
