import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fistName: string;

    @Column()
    lastName: string;

    @Column()
    credit: number;
}
