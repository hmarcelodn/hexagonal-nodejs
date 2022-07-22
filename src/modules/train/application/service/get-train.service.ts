import { Train } from '../../domain';
import { GetTrainUseCase } from '../port/in';
import { LoadTrainsPort } from '../port/out';

export class GetTrainService implements GetTrainUseCase {
    constructor(
        private readonly loadTrainsPort: LoadTrainsPort,
    ) {}
    
    getAll(): Promise<Train[]> {
        return this.loadTrainsPort.getTrains();
    }
}
