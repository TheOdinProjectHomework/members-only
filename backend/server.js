import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import { connectDB } from "./db/connectDB.js";
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js";
import passport from "./config/passport.js";
import session from "express-session";
import messageRouter from "./routes/message.routes.js";

dotenv.config();
const __dirname = path.resolve();
const app = express();

if(process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    }),
  );
}

if(process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "../frontend/dist");
  
  app.use(express.static(distPath));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  })
}

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    }
}))
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users/", userRouter);
app.use("/api/messages", messageRouter);
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