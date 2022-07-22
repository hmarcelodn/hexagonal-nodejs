import { CustomError } from './custom.error';

export class InvalidRouteError extends CustomError {
    statusCode: number = 400;

    constructor () {
        super();

        Object.setPrototypeOf(this, InvalidRouteError.prototype);
    }

    serialize(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: 'The train has invalid source/destination stations',
            }
        ];
    }
    
}
