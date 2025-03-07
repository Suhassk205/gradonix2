import { CLIENT_URL, MAIL_SERVICE_EMAIL } from "../config/env.config.js";
import { transporter } from "../config/nodemailer.config.js";

export const sendEmailVerification = async (to, token) => {
  var mailOptions = {
    from: MAIL_SERVICE_EMAIL,
    to: to,
    subject: "Verify your Email",
    html: `Click <a href="${CLIENT_URL}/auth/signup/create-account/${token}">Here</a> to Create your Account`,
  };
  transporter.sendMail(mailOptions, async (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
    }
  });
};
