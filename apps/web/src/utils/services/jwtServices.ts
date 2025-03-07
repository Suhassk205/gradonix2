import jwt from "jsonwebtoken";
import ms from "ms";
export const generateJWTtoken = (
  email: string,
  time: number | ms.StringValue
) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
    expiresIn: time,
  });
  return token;
};

export const verifyJWTtoken = (token: string) => {
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET as string);
    return verify;
  } catch (error) {
    return false;
  }
};
