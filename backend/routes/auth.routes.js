import express from "express"
import { logIn, signUp } from "../controllers/auth.controller.js";
import passport from "../config/passport.js";

const authRouter = express.Router();
authRouter.use(express.json());

authRouter.post("/sign-up", signUp);
authRouter.post("/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/failed",
  }),
);

export default authRouter;