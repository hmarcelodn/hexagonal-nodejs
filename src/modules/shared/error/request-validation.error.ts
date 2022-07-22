import { ValidationError } from 'express-validator';
import { CustomError } from '../error';

export class RequestValidationError extends CustomError {
    statusCode: number = 400;

    constructor (
        private readonly errors: ValidationError[],
    ) {
        super();

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serialize(): { message: string; field?: string | undefined; }[] {
        return this.errors.map(e => {
            return {
                message: e.msg,
                field: e.param,
            };
        });
    }
}
