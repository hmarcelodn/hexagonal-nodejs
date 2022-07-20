import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'train'
})
export class TrainEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
