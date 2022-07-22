import { StationId } from '../domain';

export class Train {
    private id: number;
    private name: string;
    private number: string;
    private sourceStationId: StationId;
    private destinationStationId: StationId;

    constructor (
        name: string,
        number: string,
        sourceStationId: number,
        destinationStationId: number,
        id?: number,
    ) {
        this.id = id || 0;
        this.name = name;
        this.number = number;
        this.sourceStationId = new StationId(sourceStationId);
        this.destinationStationId = new StationId(destinationStationId);
    }

    get getId(): number {
        return this.id;
    }

    get getName(): string {
        return this.name;
    }

    get getNumber(): string {
        return this.number;
    }

    get getSourceStationId(): StationId {
        return this.sourceStationId;
    }

    get getDestinationStationId(): StationId {
        return this.destinationStationId;
    }

    public static withoutId(
        name: string,
        number: string,
        sourceStationId: number,
        destinationStationId: number,
    ) {
        return new Train(
            name,
            number,
            sourceStationId,
            destinationStationId
        );
    }

    public static withtId(
        id: number,
        name: string,
        number: string,
        sourceStationId: number,
        destinationStationId: number,
    ) {
        return new Train(
            name,
            number,
            sourceStationId,
            destinationStationId,
            id,
        );
    }

    public isValidRoute(): boolean {
        return this.sourceStationId.id !== this.destinationStationId.id;
    }
}
