import cors from "cors";
import express, { Application } from "express";

const app: Application = express();
//Application routes
import userRoutes from "./app/modules/user/user.route";

//using cors
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;
