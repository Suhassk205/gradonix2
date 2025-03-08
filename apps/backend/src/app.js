import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";
import authRouter from "./routes/auth.routes.js";
import betaRouter from "./routes/beta.routes.js";

import { DBinit } from "./config/db.config.js";
import { CLIENT_URL, PORT, checkEnvs } from "./config/env.config.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { initPublicDir } from "./util/fileHandler.js";

checkEnvs();
initPublicDir();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100, // 100 RPM
  message: { resCode: "TOO_MANY_REQUESTS", resErrMsg: "Too many requests" },
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();

// Security middleware
app.use(helmet());
app.disable("x-powered-by");
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
}));

// Body parsing middleware
app.use(cookieParser());
app.use(compression());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static("public"));
app.use(limiter);

// Database initialization
DBinit();

// Routes
app.get("/", (req, res) => {
  return res.status(200).json({ success: true });
});

app.use("/auth", authRouter);
app.use("/v0", betaRouter);

// Error handling middleware should be last
app.use(errorMiddleware);

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});