import express from "express";
import userRoutes from "./src/routes/users.js";
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/api/v1", userRoutes);

app.listen(PORT, (error) => {
  console.log(error);
  console.log(`Server is running`);
});
