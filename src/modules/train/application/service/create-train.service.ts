import { CreateTrainUseCase } from '../port/in';
import { TrainPort } from '../port/out';

export class CreateTrainService implements CreateTrainUseCase {
    constructor(
        private readonly trainRepository: TrainPort
    ) {}

    create = async () : Promise<void> => {
        await this.trainRepository.createTrain();
        return Promise.resolve();
    }
}
