import { celebrate, Joi, Segments } from 'celebrate';
import mongoose from 'mongoose';

export const orderValidator = celebrate({
  [Segments.BODY]: Joi.object({
    items: Joi.array().min(1).required().items(Joi.required().custom(
      (value: string, helpers: Joi.CustomHelpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.error('any.invalid');
        }
        return value;
      },
    )),
    total: Joi.number().required(),
    payment: Joi.string().valid('card', 'online').required(),
    email: Joi.string().email().pattern(/^[a-z0-9._%+-]+@[a-z0-9-]+.[a-z]{2,4}$/i).required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
  }),
});

export const productValidator = celebrate({
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(30).required(),
    image: Joi.object({
      fileName: Joi.string().required(),
      originalName: Joi.string().required(),
    }).required(),
    category: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().default(null),
  }),
});
