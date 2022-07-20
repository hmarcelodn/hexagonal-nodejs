import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'flight'
})
export class FlightTypeOrmEntity {
    @PrimaryGeneratedColumn()
    id: number | undefined;
}
