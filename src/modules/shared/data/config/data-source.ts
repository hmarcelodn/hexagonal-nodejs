// import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { TimeTableEntity } from '../../../timetable/adapters/out/persistance/entities';
import { StationEntity, TrainEntity } from '../../../train/adapters/out/persistance/entities';
import { StationSeed1658501431139 } from './../migrations/1658501431139-stationSeed';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Pass2020!",
    database: "railway_dev",
    synchronize: true,
    logging: false,
    entities: [
        TrainEntity, 
        StationEntity, 
        TimeTableEntity
    ],
    migrations: [
        StationSeed1658501431139
    ],
    subscribers: [],
    migrationsRun: true,
})
