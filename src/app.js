import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./core/middlewares/errorHandler.js";
import adminRoutes from "./modules/user/admin/interfaces/http/adminRoutes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

app.get("/api", (req, res) => {
  res.json({ message: "✅ API فعال است" });
});

app.use("/api/admins", adminRoutes);

app.use(errorHandler);

export default app;
