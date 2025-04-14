import express from "express";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running`);
});
