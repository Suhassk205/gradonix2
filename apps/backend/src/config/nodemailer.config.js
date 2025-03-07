import { createTransport } from "nodemailer";
import { MAIL_SERVICE_EMAIL, MAIL_SERVICE_PASSWORD } from "./env.config.js";

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: MAIL_SERVICE_EMAIL,
    pass: MAIL_SERVICE_PASSWORD,
  },
});
