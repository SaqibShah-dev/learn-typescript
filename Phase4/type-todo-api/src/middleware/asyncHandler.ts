import { Request, Response, NextFunction } from "express";

function asyncHandler<P = {}, ResBody = any, ReqBody = any>(
  fn: (req: Request<P, ResBody, ReqBody>, res: Response<ResBody>, next: NextFunction) => Promise<any>
) {
  return (req: Request<P, ResBody, ReqBody>, res: Response<ResBody>, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export default asyncHandler;