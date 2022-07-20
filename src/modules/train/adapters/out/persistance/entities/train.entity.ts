import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'train'
})
export class TrainTypeOrmEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
