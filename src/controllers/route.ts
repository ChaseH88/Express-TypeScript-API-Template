import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middleware/async";

/**
 * @description Controller
 * @method GET
 * @route /api/
 * @access Public
 */
export const getRoute = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  res.status(200).json({
    success: true,
    data: {}
  });

});