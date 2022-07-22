import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({
    name: 'timetable',
    schema: 'timetable'
})
export class TimeTableEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

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
