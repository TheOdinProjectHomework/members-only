import express from "express"
import { editUserInfo, getUserById, getUsers } from "../controllers/user.controller.js";

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.get("/", (req, res) => {
    res.send("User route");
})

userRouter.get("/all", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/edit", editUserInfo);


export default userRouter;