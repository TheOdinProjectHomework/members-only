import express from "express"
import { editUserInfo, getUserById, getUsers, updateStatus } from "../controllers/user.controller.js";

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.get("/", (req, res) => {
    res.send("User route");
})

userRouter.get("/all", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/edit", editUserInfo);
userRouter.post("/secret", updateStatus);


export default userRouter;