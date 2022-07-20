import { TrainPort } from '../../../application/port/out';

export class InMemoryTrainRepository implements TrainPort {
    create(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
