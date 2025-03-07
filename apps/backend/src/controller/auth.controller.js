import crypto from "crypto";

import { compare, genSalt, hash } from "bcryptjs";
import { db } from "../config/pg.config.js";
import { sendEmailVerification } from "../service/emailService.js";
import {
  isValidEmail,
  isValidEmailorUsername,
  isValidPassword,
  isValidUsername,
} from "../util/authCredValidator.js";
import { generateJWTtoken } from "../util/jwt.js";

export const signupEmailVerify = async (req, res) => {
  try {
    let { email } = req.body;

    // validate inputs
    let resErr = { email: "" };
    resErr = {
      ...isValidEmail(email),
    };
    if (Object.keys(resErr).length > 0) {
      return res.status(200).json({
        success: false,
        resData: {
          error: resErr,
        },
      });
    }

    //sanitize inputs
    email = email.trim().toLowerCase();

    // check if acc exist
    let accCheck = await db.query(
      `select email from accounts where email = $1`,
      [email]
    );
    if (accCheck.length != 0) {
      resErr = {
        email: "Account already exist",
      };
      return res.status(200).json({
        success: false,
        resData: { error: resErr },
      });
    }

    // generate token
    const emailToken = generateJWTtoken({ email: email }, "1d");

    // send email
    await sendEmailVerification(email, emailToken);

    return res.status(200).json({ success: true, resData: { error: resErr } });
  } catch (error) {
    return res.status(500).json({ success: false, resErrMsg: error.message });
  }
};

export const signupCreateAccount = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    let resErr = {
      username: "",
      email: "",
      password: "",
    };

    // validate inputs
    resErr = {
      ...isValidEmail(email),
      ...isValidPassword(password),
      ...isValidUsername(username),
    };

    if (Object.keys(resErr).length > 0) {
      return res.status(200).json({
        success: false,
        resData: {
          error: resErr,
        },
      });
    }
    // sinitize inputs
    username = username.trim();
    email = email.trim().toLowerCase();
    password = password.trim();

    // check if acc exist
    let accCheck = await db.query(
      `select email, username from accounts where email = $1 or username = $2`,
      [email, username]
    );
    if (accCheck.length != 0) {
      accCheck.forEach((row) => {
        if ("email" in row && row.email == email) {
          resErr.email = "Email already in use";
        }
        if ("username" in row && row.username == username) {
          resErr.username = "Username already in use";
        }
      });
      return res.status(200).json({
        success: false,
        resData: {
          error: resErr,
        },
      });
    }
    // create account
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    let acc_id = "";
    while (true) {
      try {
        acc_id = `account#${crypto.randomBytes(12).toString("base64url")}`;
        await db.query(
          `insert into accounts(account_id, username, email, "password", created_at) values ($1, $2, $3, $4, $5)`,
          [acc_id, username, email, hashedPassword, Date.now()]
        );
        break;
      } catch (error) {
        if (error.code === "23505") {
          continue;
        } else {
          throw new Error(error);
        }
      }
    }

    // generate auth tokens
    const refreshToken = generateJWTtoken({ acc_id: acc_id }, "30d");
    const accessToken = generateJWTtoken({ acc_id: acc_id }, "15m");

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      sameSite: "lax",
      path: "/",
    });

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 15, // 15 minutes
      sameSite: "lax",
      path: "/",
    });

    return res
      .status(200)
      .json({ success: true, resData: { error: resErr }, resRoute: "/" });
  } catch (error) {
    return res.status(500).json({ success: false, resErrMsg: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    let { user, password } = req.body;

    // validate inputs
    let resErr = { user: "", password: "" };
    resErr = {
      ...isValidEmailorUsername(user),
      ...isValidPassword(password),
    };
    if (Object.keys(resErr).length > 0) {
      return res.status(200).json({
        success: false,
        resData: {
          error: resErr,
        },
      });
    }

    // sanitize inputs
    user = user.trim();
    if (user.includes("@")) {
      user = user.toLowerCase();
    }
    password = password.trim();

    // check if acc exist
    let accCheck = await db.query(
      `select email, username, password, account_id from accounts where email = $1 or username = $1`,
      [user]
    );

    if (accCheck.length != 1) {
      resErr = {
        user: "Account not found",
      };
      return res.status(200).json({
        success: false,
        resData: {
          error: resErr,
        },
      });
    }

    // check password
    const acc = accCheck[0];
    const isMatch = await compare(password, acc.password);
    if (!isMatch) {
      resErr = {
        password: "Incorrect Password",
      };
      return res.status(200).json({
        success: false,
        resData: {
          error: resErr,
        },
      });
    }

    // generate auth tokens
    const refreshToken = generateJWTtoken({ acc_id: acc.account_id }, "30d");
    const accessToken = generateJWTtoken({ acc_id: acc.account_id }, "15m");

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
      sameSite: "lax",
      path: "/",
    });

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 15, // 15 minutes
      sameSite: "lax",
      path: "/",
    });

    return res
      .status(200)
      .json({ success: true, resData: { error: resErr }, resRoute: "/" });
  } catch (error) {
    return res.status(500).json({ success: false, resErrMsg: error.message });
  }
};
