import { Request, Response, NextFunction } from 'express';

export interface IError extends Error {
    statusCode: number
 }

export default (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res
    .status(err.statusCode ?? 500)
    .send({ message: err.message });
};
