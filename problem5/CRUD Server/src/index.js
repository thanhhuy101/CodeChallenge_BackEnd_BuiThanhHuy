import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import resourceRoutes from "./routes/resource.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/resource", resourceRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT);
  connectDB();
});
