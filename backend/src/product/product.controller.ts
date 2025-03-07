import product from "./product.model";
import { Request, Response } from "express";

export const createProduct = (req: Request, res: Response) => {
    const {
        title,
        image,
        category,
        description,
        price
    } = req.body;
    return product.create({
        title,
        image,
        category,
        description,
        price
    })
    .then((product) => res.status(201).send({data: product}))
    .catch(() => res.status(500).send({ message: 'Что-то пошло не так' }))
};

export const getProducts = (req: Request, res: Response) => {
    return product.find({})
    .then((products) => res.status(200).send(
        {
            total: products.length,
            data: products
        }
    ))
    .catch(() => res.status(500).send({ message: 'Что-то пошло не так' }))
};