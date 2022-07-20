import express from 'express';
import { CreateTrainService } from '../../../application/service';

export class CreateTrainController {
    constructor(
        private readonly createFlightService = new CreateTrainService(),
    ) {}

    create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('create');
        await this.createFlightService.create();
        res.status(200).send({});
    }
}
