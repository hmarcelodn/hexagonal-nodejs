import express from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../error';

export const validateRequest = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }

    next();
}
