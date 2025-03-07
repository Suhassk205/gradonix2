import { Router } from "express";
import {
  signin,
  signupCreateAccount,
  signupEmailVerify,
} from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up/verify", signupEmailVerify);

authRouter.post("/sign-up/create", signupCreateAccount);

authRouter.post("/sign-in", signin);

export default authRouter;
