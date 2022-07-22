import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'timetable'
})
export class TimeTableEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    trainId: number;

    @Column()
    sourceStationId: number;

    @Column()
    destinationStationId: number;

    @Column()
    departureDate: Date;

    @Column()
    arrivalDate: Date;
}
