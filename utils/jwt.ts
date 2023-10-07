import jwt from "jsonwebtoken";
import { Response } from "express";
interface JwtPayload {
  name: string;
  userId: string;
  role: string;
}

export const createJwt = ({ payload }: { payload: JwtPayload }): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_LIFETIME as string,
  });
  return token;
};

export const isTokenValid = ({ token }: { token: string }): JwtPayload => {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

export const attachCookiesToResponse = ({
  res,
  user,
}: {
  res: Response;
  user: JwtPayload;
}) => {
  //res for attaching the cookies that will come from authController // user will will the payload to create token
  const token = createJwt({ payload: user });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};
