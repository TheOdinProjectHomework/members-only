import bcrypt from "bcrypt"
import { User } from "../models/user.model.js";

export const signUp = async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;

    try {
        const userAlreadyExists = await User.findOne({ username });
        if(userAlreadyExists) return res.status(400).json({ success: false, message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstName, lastName, username, email, password: hashedPassword
        });

        await user.save();
        return res.status(201).json({ success: true, data: {
            firstName, lastName, username, email
        }});
    } catch (error) {
        console.log("Error creating account");
        return res.status(400).json({ success: false, message: error.message });
    }

    res.send(firstName);
}