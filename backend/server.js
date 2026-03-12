import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js";
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js";

dotenv.config();
const app = express();

app.use("/users/", userRouter);
app.use("/", authRouter);

app.get("/", (req, res) => {
    res.send("Hello world");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening on port: ${PORT}`);
})