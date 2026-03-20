import express from "express"
import { getMe, logIn, logOut, signUp } from "../controllers/auth.controller.js";
import passport from "../config/passport.js";

const authRouter = express.Router();
authRouter.use(express.json());

authRouter.post("/sign-up", signUp);
authRouter.post("/login", logIn);
authRouter.get("/me", getMe);
authRouter.get("/logout", logOut);

export default authRouter;