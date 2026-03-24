import { json } from "express";
import { Message } from "../models/message.model.js";
import { User } from "../models/user.model.js";

export const getMessages = async (req, res) => {
    try {
        const msgs = await Message.find().populate('author', 'firstName lastName').exec();
        if(!msgs) return res.status(400).json({ success: false, message: "No messages found" });
        res.status(200).json({ success: true, data: msgs });
    } catch (error) {
        console.log("Error getting all messages");
        res.status(400).json({ success: false, message: error.message });
    }
}

export const myMessages = async (req, res) => {
  const { userId } = req.params;

  try {
    const msgs = await Message.find({ author: userId }).populate('author', 'createdAt').exec();
    return res.status(200).json({ success: true, data: msgs });
  } catch(error) {
    console.log("Error fetching user msges");
    return res.status(400).json({ success: false, message: error.message });
  }
}

export const addMessage = async (req, res) => {
  const { title, text, author } = req.body;
  try {
    const validUser = await User.findById(author);
    if(!validUser) return res.status(400).json({success: false, message: "User not found"});
    const newMessage = new Message({ title, text, author: validUser._id });
    await newMessage.save();
    return res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.log("Error creating message");
    return res.status(400).json({ success: false, message: error.message });
  }
};