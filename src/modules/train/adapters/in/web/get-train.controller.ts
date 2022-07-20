import express from 'express';
import { Service, Inject } from 'typedi';
import { GetTrainUseCase } from '../../../application/port/in';

@Service()
export class GetTrainController {
    constructor(
        @Inject('get-train.usecase')
        private readonly getTrainUseCase: GetTrainUseCase,
    ) {}

    get = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.log('get');
        await this.getTrainUseCase.get();
        return res.status(200).send({});
    }
}
