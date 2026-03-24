import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import passport from "passport";

export const signUp = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    const userAlreadyExists = await User.findOne({ username });
    if (userAlreadyExists)
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(201).json({
      success: true,
      data: {
        firstName,
        lastName,
        username,
        email,
      },
    });
  } catch (error) {
    console.log("Error creating account");
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const logIn = (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ success: false });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({ success: true, user });
    });
  })(req, res, next);
};

export const logOut = (req, res, next) => {
  req.logout((err) => {
    if(err) {
      return next(err);
    }
    return res.json({ success: true, message: "Logged out"});
  })
}

export const getMe = (req, res) => {
  if(!req.user) {
    return res.status(401).json({ user: null });
  }

  res.status(200).json({
    user: {
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName
    }
  })
};