import { CreateTrainUseCase } from '../port/in';
import { TrainPort } from '../port/out';

export class CreateTrainService implements CreateTrainUseCase {
    constructor(
        private readonly trainPort: TrainPort
    ) {}

    create = async (trainInputModel: any): Promise<void> => {
        await this.trainPort.createTrain(trainInputModel);
    }
}
