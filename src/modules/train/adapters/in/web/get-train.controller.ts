import express from 'express';
import { GetTrainService } from '../../../application/service';

export class GetTrainController {
    constructor(
        private readonly getFlightService = new GetTrainService(),
    ) {}

    get = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('get');
        return res.status(200).send({});
    }
}
