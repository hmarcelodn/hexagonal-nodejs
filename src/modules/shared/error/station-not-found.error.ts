import { CustomError } from '../error';

export class StationNotFoundError extends CustomError {
    statusCode: number = 404;

    constructor(
        private readonly stationId: number,
    ) {
        super();

        Object.setPrototypeOf(this, StationNotFoundError.prototype);
    }

    serialize(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message: `Station ${this.stationId} not found`,
            },
        ]
    }
}
