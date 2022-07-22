import { Inject, Service } from 'typedi';
import { GetTrainUseCase } from '../../../application/port/in';
import { Train } from '../../../domain';

@Service()
export class TrainApi {
    constructor (
        @Inject('get-train.usecase')
        private readonly getTrainUseCase: GetTrainUseCase,
    ) {}

    getTrain(trainId: number): Promise<Train> {
        return this.getTrainUseCase.get(trainId);
    }
}
