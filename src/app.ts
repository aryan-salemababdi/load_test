import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

export default app;