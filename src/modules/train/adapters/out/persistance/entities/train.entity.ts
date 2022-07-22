import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StationEntity } from './station.entity';

@Entity({
    name: 'train'
})
export class TrainEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    number: string;

    @ManyToOne(() => StationEntity)
    sourceStation: StationEntity;

    @ManyToOne(() => StationEntity)
    destinationStation: StationEntity;
}
