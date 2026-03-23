import express from "express";
import { addMessage, getMessages } from "../controllers/message.controller.js";

const messageRouter = express.Router();
messageRouter.use(express.json());

messageRouter.get("/", getMessages);

messageRouter.post("/add", addMessage);

export default messageRouter;