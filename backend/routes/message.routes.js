import express from "express";
import { addMessage, getMessages, myMessages } from "../controllers/message.controller.js";

const messageRouter = express.Router();
messageRouter.use(express.json());

messageRouter.get("/", getMessages);

messageRouter.get("/me/:userId", myMessages);

messageRouter.post("/add", addMessage);

export default messageRouter;