import express from 'express';
import { Service, Inject } from 'typedi';
import { BaseController } from './base.controller';
import { CreateTrainUseCase } from '../../../application/port/in';

@Service()
export class CreateTrainController extends BaseController {
    constructor(
        @Inject('create-train.usecase')
        private readonly createTrainUseCase: CreateTrainUseCase,
    ) {
        super();
    }

    create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const newTrain = await this.createTrainUseCase.create(req.body);
        res.status(200).send(newTrain);
    }
}
