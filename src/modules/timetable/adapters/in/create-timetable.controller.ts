import express from 'express';
import { Inject, Service } from 'typedi';
import { CreateTimeTableUseCase } from '../../application/port/in';

@Service()
export class CreateTimeTableController {
    constructor (
        @Inject('create-timetable.usecase')
        private readonly createTimeTableUseCase: CreateTimeTableUseCase,
    ) {}

    create = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const timetable = await this.createTimeTableUseCase.create(req.body);
        return res.status(201).send(timetable);
    }
}
