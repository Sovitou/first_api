import express from "express";
import userRoutes from "./src/routes/users.js";
import { connectToDb } from "./src/config/db.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1", userRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running ${PORT}`);
  await connectToDb();
});
