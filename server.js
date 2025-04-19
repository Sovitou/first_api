import express from "express";
import userRoutes from "./src/routes/users.js";
import { connectToDb } from "./src/config/db.js";

// import router from "./src/routes/users.js";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running `);
  await connectToDb();
});
