import { db } from "../config/pg.config.js";
import { generateJWTtoken, verifyJWTtoken } from "../util/jwt.js";

export const authProtected = async (req, res, next) => {
  try {
    // get cookies
    const refreshToken = req.cookies["refresh_token"];
    const accessToken = req.cookies["access_token"];
    const decodeRefresh = verifyJWTtoken(refreshToken);
    const decodeAccess = verifyJWTtoken(accessToken);

    // check if any of the tokens is missing or expired
    if (!decodeRefresh || !decodeAccess) {
      // ask user to reauthenticate
      res.clearCookie("refresh_token");
      res.clearCookie("access_token");
      return res
        .status(200)
        .json({ resCode: "AUTH_SESSION_EXPIRED", resRoute: "/auth" });
    }

    // create new refresh token
    const expDate = new Date(decodeRefresh.exp * 1000);
    const now = new Date();
    const nod = (expDate - now) / 1000 / 60 / 60 / 24;

    if (nod <= 1) {
      res.cookie(
        "refresh_token",
        generateJWTtoken(decodeRefresh.acc_id, "30d"),
        {
          httpOnly: true,
          secure: false,
          maxAge: 1000 * 60 * 60 * 24 * 30,
          sameSite: "lax",
          path: "/",
        }
      );
    }

    // check if account exist
    const acc = await db.query(`SELECT * FROM accounts WHERE account_id = $1`, [
      decodeRefresh.acc_id,
    ]);

    if (acc.length !== 1) {
      res.clearCookie("refresh_token");
      res.clearCookie("access_token");
      return res
        .status(200)
        .json({ resCode: "UNKNOWN_ACCOUNT", resRoute: "/auth" });
    }

    req.userCred = decodeRefresh.id;
    req.userAcc = acc[0];

    next();
  } catch (error) {
    res.status(500).json({ resErrMsg: error.message });
  }
};

export const authProtected2 = async (req, res, next) => {
  try {
    const refreshToken = req.cookies["refresh_token"];
    const accessToken = req.cookies["access_token"];

    const decodeRefresh = verifyJWTtoken(refreshToken);

    const decodeAccess = verifyJWTtoken(accessToken);

    // check if refresh token is valid
    if (!decodeRefresh) {
      res.clearCookie("refresh_token");
      res.clearCookie("access_token");
      return res
        .status(200)
        .json({ resCode: "AUTH_SESSION_EXPIRED", resRoute: "/auth" });
    }

    // check if access token is valid or expired
    if (!decodeAccess) {
      const newAccessToken = generateJWTtoken(decodeRefresh.acc_id, "15m");
      res.cookie("access_token", newAccessToken, {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 15, // 15 minutes
        sameSite: "lax",
        path: "/",
      });
    }

    // check if refresh token is about to expire
    const expDate = new Date(decodeRefresh.exp * 1000);
    const now = new Date();
    const nod = (expDate - now) / 1000 / 60 / 60 / 24;
    if (nod <= 1) {
      const newRefreshToken = generateJWTtoken(decodeRefresh.acc_id, "30d");
      res.cookie("refresh_token", newRefreshToken, {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        sameSite: "lax",
        path: "/",
      });
    }

    // check if account exists
    const acc = await db.query(`SELECT * FROM accounts WHERE account_id = $1`, [
      decodeRefresh.acc_id,
    ]);

    if (acc.length !== 1) {
      res.clearCookie("refresh_token");
      res.clearCookie("access_token");
      return res
        .status(200)
        .json({ resCode: "UNKNOWN_ACCOUNT", resRoute: "/auth" });
    }

    req.userCred = decodeRefresh.id;
    req.userAcc = acc[0];

    next();
  } catch (error) {
    res.status(500).json({ resErrMsg: error.message });
  }
};
