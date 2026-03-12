import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo db connected: ", con.connection.host);
    } catch (error) {
        console.log("Error connecting to mongo db: ", error.message);
        process.exit(1);
    }
}