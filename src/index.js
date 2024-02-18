import express from "express";
import { config } from "dotenv";
import cors from "cors";

import UserRouter from "./routes/user.js";
import AuthRouter from "./routes/auth.js";

config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users/", UserRouter);
app.use("/api/auth/", AuthRouter);

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
