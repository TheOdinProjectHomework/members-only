import bcrypt from "bcrypt"
import { User } from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-_id firstName lastName email username");
        if(users.length === 0) return res.status(404).json({ success: false, message: "No users found" });
        return res.status(200).json({ success: true, data: users});
    } catch (error) {
        console.log("Error getting users");
        return res.status(500).json({ success: false, error: error.message });
    }
}

export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).select("-_id firstName lastName email username");

        if(!user) return res.status(404).json({ success: false, message: "Could not find user with that id" });

        return res.status(200).json(user);
    } catch (error) {
        console.log("Error getting user");
        return res.status(404).json({ success: false, error: error.message });
    }
}

export const editUserInfo = async (req, res) => {
    const { id, username } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { username }, { new: true });
        if(!user) return res.status(404).json({ success: false, message: "User not found"});
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.log("Error updating user");
        return res.status(404).json({ success: false, error: error.message });
    }
}