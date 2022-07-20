import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'train'
})
export class TrainTypeOrmEntity {
    @PrimaryGeneratedColumn()
    id: number | undefined;
}
