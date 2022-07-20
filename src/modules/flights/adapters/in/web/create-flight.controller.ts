import express from 'express';
import { CreateFlightService } from '../../../application';

export class CreateFlightController {
    constructor(
        private readonly createFlightService = new CreateFlightService(),
    ) {}

    create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        await this.createFlightService.create();
        res.status(200).send({});
    }
}
