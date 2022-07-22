import express from 'express';
import { Service, Inject } from 'typedi';
import { BaseController } from './base.controller';
import { GetTrainUseCase } from '../../../application/port/in';

@Service()
export class GetTrainController extends BaseController {
    constructor(
        @Inject('get-train.usecase')
        private readonly getTrainUseCase: GetTrainUseCase,
    ) {
        super();
    }

    getAll = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const trains = await this.getTrainUseCase.getAll();
        return res.status(200).send(trains);
    }
}
