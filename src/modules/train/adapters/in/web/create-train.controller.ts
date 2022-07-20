import express from 'express';
import { Service, Inject } from 'typedi';
import { CreateTrainUseCase } from '../../../application/port/in';

@Service()
export class CreateTrainController {
    constructor(
        @Inject('create-train.usecase')
        private readonly createTrainUseCase: CreateTrainUseCase,
    ) {}

    create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('create');
        await this.createTrainUseCase.create();
        res.status(200).send({});
    }
}
