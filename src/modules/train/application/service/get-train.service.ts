import { GetTrainUseCase } from '../port/in';
import { TrainPort } from '../port/out';

export class GetTrainService implements GetTrainUseCase {
    constructor(
        private readonly trainPort: TrainPort
    ) {}
    
    getAll(): Promise<any[]> {
        return this.trainPort.getTrains()
    }
}
