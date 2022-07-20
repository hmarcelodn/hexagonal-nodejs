import express from 'express';
import { CreateFlightService } from '../../../application/service';

export class CreateFlightController {
    constructor(
        private readonly createFlightService = new CreateFlightService(),
    ) {}

    create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('create');
        await this.createFlightService.create();
        res.status(200).send({});
    }
}
