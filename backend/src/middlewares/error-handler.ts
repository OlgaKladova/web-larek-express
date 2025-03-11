import { Request, Response, NextFunction } from 'express';

export interface IError extends Error {
    statusCode: number
 }

export default (err: IError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res
    .status(err.statusCode ?? 500)
    .send({ message: err.message });
};
