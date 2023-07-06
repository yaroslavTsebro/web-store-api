import express from "express"
import {userRouter} from "./user";

let router = express.Router();

router.use('/user', userRouter);

export {
  router as mainRouter
}