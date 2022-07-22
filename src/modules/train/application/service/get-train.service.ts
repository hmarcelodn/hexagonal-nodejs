import { Train } from '../../domain';
import { GetTrainUseCase } from '../port/in';
import { LoadTrainsPort } from '../port/out';

export class GetTrainService implements GetTrainUseCase {
    constructor(
        private readonly getTrainPort: LoadTrainsPort,
    ) {}

    get(trainId: number): Promise<Train> {
        return this.getTrainPort.getTrain(trainId);
    }
}
