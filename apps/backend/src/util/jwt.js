import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.config.js";

export const generateJWTtoken = (txt, time) => {
  const token = jwt.sign({ ...txt }, JWT_SECRET, {
    expiresIn: time,
  });
  return token;
};

export const verifyJWTtoken = (token) => {
  if (!token) {
    return false;
  }
  try {
    const ver = jwt.verify(token, JWT_SECRET);
    return ver;
  } catch (error) {
    console.log(error);
    return false;
  }
};
