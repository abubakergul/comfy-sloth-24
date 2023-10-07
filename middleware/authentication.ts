import { Request, Response, NextFunction } from "express";
import { isTokenValid } from "../utils/jwt";
import { UnauthenticatedError, UnauthorizedError } from "../errors";

interface CustomRequest extends Request {
  user?: {
    name: string;
    userId: string;
    role: string;
  };
}

export const authenticateUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  try {
    const payload = isTokenValid({ token });
    const { name, userId, role } = payload;
    req.user = { name, userId, role };
  } catch (error) {
    // Handle the error here if needed.
  }

  console.log("token present");
  next();
};

export const authorizePermissions = (roles: string | string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
