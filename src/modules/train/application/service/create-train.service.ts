import { CreateTrainUseCase } from '../port/in';

export class CreateTrainService implements CreateTrainUseCase {
    create(): Promise<void> {
        return Promise.resolve();
    }
}
