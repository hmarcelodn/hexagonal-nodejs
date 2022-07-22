import { CustomError } from '../error';

export class InvalidScheduleError extends CustomError {
    statusCode: number = 400;

    constructor() {
        super();

        Object.setPrototypeOf(this, InvalidScheduleError.prototype);
    }

    serialize(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: 'Departure date and arrival date overlaps.'
            },
        ];
    }
}
