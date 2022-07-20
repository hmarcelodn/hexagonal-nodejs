import { CreateFlightUseCase } from '../port/in';

export class CreateFlightService implements CreateFlightUseCase {
    create(): Promise<void> {
        return Promise.resolve();
    }
}
