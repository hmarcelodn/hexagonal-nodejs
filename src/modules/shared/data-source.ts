// import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { StationEntity, TrainEntity } from '../train/adapters/out/persistance/entities';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "railway_dev",
    synchronize: true,
    logging: false,
    entities: [TrainEntity, StationEntity],
    migrations: [],
    subscribers: [],
})
