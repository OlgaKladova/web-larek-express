import { NextFunction, Request, Response } from 'express';
import { Error as MongooseError } from 'mongoose';
import product from '../models/product';
import BadRequestError from '../errors/bad-request-error';
import ConflictError from '../errors/conflict-error';

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const {
    title,
    image,
    category,
    description,
    price,
  } = req.body;
  return product.create({
    title,
    image,
    category,
    description,
    price,
  })
    .then((product) => res.status(201).send({ data: product }))
    .catch((error) => {
      if (error instanceof MongooseError.ValidationError) {
        return next(new BadRequestError('Ошибка валидации данных при создании товара'));
      }

      if (error instanceof Error && error.message.includes('E11000')) {
        return next(new ConflictError('Ошибка валидации данных при создании товара'));
      }

      return next(error);
    });
};

export const getProducts = (_req: Request, res: Response, next: NextFunction) => product.find({})
  .then((products) => res.status(200).send(
    {
      items: products,
      total: products.length,
    },
  ))
  .catch((error) => next(error));
