import { CustomError } from '../error';

export class TrainNotFound extends CustomError {
    statusCode: number = 404;

    constructor() {
        super();

        Object.setPrototypeOf(this, TrainNotFound.prototype);
    }
    
    serialize(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: 'Train was not found',
            },
        ]
    }
}
