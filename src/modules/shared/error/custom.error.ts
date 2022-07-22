export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor () {
        super();
        Object.setPrototypeOf(this, CustomError);
    }

    abstract serialize (): { message: string, field?: string }[];
}
