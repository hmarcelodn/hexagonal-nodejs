import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'station'
})
export class StationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
