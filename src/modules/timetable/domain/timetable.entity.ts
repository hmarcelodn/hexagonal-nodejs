import { InvalidRouteError, InvalidScheduleError } from '../../shared/error';
import { TimeTableStationId, TimeTableTrainId } from '../domain';

export class TimeTable {
    private id: number;
    private trainId: TimeTableTrainId;
    private sourceStationId: TimeTableStationId;
    private destinationStationId: TimeTableStationId;
    private departureDate: Date;
    private arrivalDate: Date;

    constructor(
        id: number, 
        trainId: number
    ) {
        this.id = id;
        this.trainId = new TimeTableTrainId(trainId);
    }

    get getId(): number {
        return this.id;
    }

    get getTrainId(): TimeTableStationId {
        return this.trainId;
    }

    get getSourceStationId(): TimeTableStationId {
        return this.sourceStationId;
    }

    get getDestinationStationId(): TimeTableStationId {
        return this.destinationStationId;
    }

    get getDepartureDate(): Date {
        return this.departureDate;
    }

    get getArrivalDate(): Date {
        return this.arrivalDate;
    }

    public schedule(departureDate: Date, arrivalDate: Date): void {
        if (departureDate > arrivalDate) {
            throw new InvalidScheduleError()
        }

        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }

    public setRoutes(sourceStationId: number, destinationStationId: number): void {
        if (sourceStationId === destinationStationId) {
            throw new InvalidRouteError();
        }

        this.sourceStationId = new TimeTableStationId(sourceStationId);
        this.destinationStationId = new TimeTableStationId(destinationStationId);
    }

    public static withoutId(trainId: number): TimeTable {
        return new TimeTable(
            0,
            trainId,
        );
    }
}
