import { StationId } from '../domain';

export class Train {
    private _id: number;
    private _name: string;
    private _number: string;
    private _sourceStationId: StationId;
    private _destinationStationId: StationId;

    constructor (
        name: string,
        number: string,
        sourceStationId: number,
        destinationStationId: number,
        id?: number,
    ) {
        this._id = id || 0;
        this._name = name;
        this._number = number;
        this._sourceStationId = new StationId(sourceStationId);
        this._destinationStationId = new StationId(destinationStationId);
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get number(): string {
        return this._number;
    }

    get sourceStationId(): StationId {
        return this._sourceStationId;
    }

    get destinationStationId(): StationId {
        return this._destinationStationId;
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
