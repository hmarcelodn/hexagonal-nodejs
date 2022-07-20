import express from 'express';
import { GetFlightService } from '../../../application/service';

export class GetFlightController {
    constructor(
        private readonly getFlightService = new GetFlightService(),
    ) {}

    get = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('get');
        return res.status(200).send({});
    }
}
