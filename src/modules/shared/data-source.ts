import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { TrainEntity } from '../train/adapters/out/persistance/entities';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Pass2020!",
    database: "railway_dev",
    synchronize: true,
    logging: false,
    entities: [TrainEntity],
    migrations: [],
    subscribers: [],
})
