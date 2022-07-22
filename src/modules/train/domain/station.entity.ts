export class Station {
    private _id: number;
    private _name: string;

    constructor (
        name: string,
        id?: number,
    ) {
        this._name = name;
        this._id = id || 0;
    }

    public static withId( 
        id: number,
        name: string,
    ): Station {
        return new Station(
            name,
            id,
        );
    }
}
