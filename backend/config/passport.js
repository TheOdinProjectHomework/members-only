import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if(!user) return done(null, false, { message: "Incorrect username" });
            const match = await bcrypt.compare(password, user.password);
            if(!match) return done(null, false, { message: "Incorrect password" });
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
)

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
})

export default passport;