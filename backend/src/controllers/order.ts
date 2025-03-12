import { Request, Response, NextFunction } from 'express';
import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import product from '../models/product';
import BadRequestError from '../errors/bad-request-error';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { items, total } = req.body;
    items.forEach((item: mongoose.Types.ObjectId, index: number) => {
      let sum: number = 0;
      product.findById(item, 'price')
        .then((product) => {
          if (product === null || product.price === null) {
            return next(new BadRequestError('Ошибка валидации данных при создании заказа'));
          }

          if (product.price !== undefined) {
            sum += product.price;
          }

          if (index === items.length - 1) {
            if (sum !== total) {
              return next(new BadRequestError('Ошибка валидации данных при создании заказа'));
            }
            sum = 0;
          }

          return res.status(200).send(
            {
              id: faker.string.uuid(),
              total,
            },
          );
        });
    });
  } catch (error) {
    next(error);
  }
};
