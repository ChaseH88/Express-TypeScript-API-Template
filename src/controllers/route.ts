import asyncHandler from "../middleware/async";

/**
 * @description Controller
 * @method GET
 * @route /api/
 * @access Public
 */
export const getRoute = asyncHandler(async (req: any, res: any, next: any) => {

  res.status(200).json({
    success: true,
    data: {}
  });

});