import { FlightPort } from '../../../application/port/out';

export class InMemoryFlightRepository implements FlightPort {
    create(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
