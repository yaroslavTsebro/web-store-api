import {Role} from "../model/db/Role";
import {NextFunction, Request, Response} from "express";
import {AppError} from "../model/error/AppError";
import {ErrorMessages} from "../constant/ErrorMessages";
import {ErrorCodes} from "../constant/ErrorCodes";

export function checkRoleMiddleware(role: Role) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.user.role !== role) {
      throw new AppError(ErrorCodes.FORBIDDEN, ErrorMessages.FORBIDDEN);
    }
    next();
  }
}