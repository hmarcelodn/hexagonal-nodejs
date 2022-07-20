import { FlightPort } from '../../../application/port/out';

export class InMemoryFlightRepository implements FlightPort {
    save(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
