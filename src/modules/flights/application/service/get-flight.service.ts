import { GetFlightUseCase } from '../port/in';

export class GetFlightService implements GetFlightUseCase {
    get(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
