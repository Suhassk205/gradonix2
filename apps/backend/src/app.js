// apps/backend/src/app.js
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

// Check environment variables
checkEnvs();

// Initialize public directory
initPublicDir();

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
  message: { resCode: "TOO_MANY_REQUESTS", resErrMsg: "Too many requests" },
  standardHeaders: true,
  legacyHeaders: false,
});

const app = express();

// Security middleware
app.use(helmet());
app.disable("x-powered-by");

// CORS configuration
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
}));

// Body parsing middleware
app.use(cookieParser());
app.use(compression());
app.use(express.json({ limit: '15728640' }));
app.use(express.urlencoded({ extended: true, limit: '50' }));

// Static files
app.use(express.static("public"));

// Rate limiting
app.use(limiter);
app.use(errorMiddleware);

// Routes
app.get("/", (req, res) => {
  return res.status(200).json({ success: true });
});

app.use("/auth", authRouter);
app.use("/v0", betaRouter);

// Error handling middleware (should be last)

// Initialize database
DBinit();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});