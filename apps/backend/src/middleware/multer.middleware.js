import crypto from "crypto";
import multer from "multer";

import { createDirectoryIfNotExists } from "../util/fileHandler.js";
const disk = multer.diskStorage({
  destination: (req, file, cb) => {
    const { title } = req.body;
    createDirectoryIfNotExists(`./public/uploads/`);
    cb(null, `./public/uploads/`);
  },
  filename: (req, file, cb) => {
    cb(null, `${crypto.randomBytes(16).toString("hex")}`);
  },
});

const betaUpload = multer({ storage: disk, dest: "public/uploads" });

export default betaUpload;
