export class Station {
    private id: number;
    private name: string;

    constructor (
        name: string,
        id?: number,
    ) {
        this.name = name;
        this.id = id || 0;
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

    public get getId(): number {
        return this.id;
    }

    public get getName(): string {
        return this.name;
    }
}
