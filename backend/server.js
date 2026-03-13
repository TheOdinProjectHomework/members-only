import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js";
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js";
import passport from "./config/passport.js";
import session from "express-session";

dotenv.config();
const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/users/", userRouter);
app.use("/", authRouter);

app.get("/", (req, res) => {
    // console.log(req.user);
    res.send("Members Only");
})

app.get("/failed", (req, res) => {
  res.send("Failed Login");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening on port: ${PORT}`);
})