import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, data: null, error: "UNAUTHORIZED" });
    }
    const decoded = jwt.verify(token, "SECRET_KEY");
    //@ts-ignore
    req.user = decoded;
    next();
  } catch (error: any) {}
};

export const isCreator = (req: Request, res: Response, next: NextFunction) => {
  try {
    //@ts-ignore
    const role = req.user?.role;

    

    if (role !== "creator") {
      return res.status(403).json({
        success: false,
        data: null,
        error: "FORBIDDEN",
      });
    }
    next();
  } catch (error: any) {}
};
export const isContestee = (req: Request, res: Response, next: NextFunction) => {
  try {
    //@ts-ignore
    const role = req.user?.role;

    

    if (role !== "contestee") {
      return res.status(403).json({
        success: false,
        data: null,
        error: "FORBIDDEN",
      });
    }
    next();
  } catch (error: any) {}
};
