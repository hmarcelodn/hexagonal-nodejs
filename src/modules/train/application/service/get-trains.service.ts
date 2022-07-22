import { Train } from '../../domain';
import { GetTrainsUseCase } from '../port/in';
import { LoadTrainsPort } from '../port/out';

export class GetTrainsService implements GetTrainsUseCase {
    constructor(
        private readonly loadTrainsPort: LoadTrainsPort,
    ) {}
    
    getAll(): Promise<Train[]> {
        return this.loadTrainsPort.getTrains();
    }
}
