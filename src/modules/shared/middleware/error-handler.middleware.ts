import express from 'express';
import { CustomError } from '../error';

export const errorHandler = (
    error: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    if (error instanceof CustomError) {
        return res.status(error.statusCode).send({
            errors: error.serialize(),
        })
    }

    return res.status(400).send({
        errors: [error || 'Unexpected error'],
    });

    next();
}
